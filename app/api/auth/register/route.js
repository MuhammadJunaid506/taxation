import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';

export async function POST(req) {
    await dbConnect();

    try {
        const { fullName, email, phone, password } = await req.json();
        console.log(fullName, email, phone, password)

        if (!fullName || !email || !phone || !password) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ success: false, message: 'email already exist' });
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        console.log(hashedPassword, "hashhhhhhhhhhh")

        const newUser = new User({
            fullName,
            email,
            phone,
            password : hashedPassword
        });

        await newUser.save();

        return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
