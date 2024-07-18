import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import User from "../../../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  await dbConnect();

  try {
    // Ensure to await the req.body() method to get the parsed JSON data
    const { email, password } = await req.json();

    // Check if email and password are provided
    if (!email || !password) {
      return NextResponse.json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Find user by email
    const user = await User.findOne({ email });
    // If user not found, return error
    if (!user) {
      return NextResponse.json({
        success: false,
        message: "user not found",
      });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    // If passwords don't match, return error
    if (!isMatch) {
      return NextResponse.json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    // Create JWT token
    const payload = { id: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET || "thisisascreatkeyforsecurity", {
      expiresIn: "1h",
    });

    // Respond with success and token
    return NextResponse.json({ success: true, token });
  } catch (error) {
    // Handle any errors
    console.error("Login error:", error);
    return NextResponse.json({ success: false, error: "Internal server error" });
  }
}
