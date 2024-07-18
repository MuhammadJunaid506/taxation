// app/profile/page.js
"use client"
import React from 'react';

const Profile = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 py-10">
            <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between pb-4 border-b border-gray-300">
                    <div className="flex items-center">
                        <img 
                            src="/profile-picture.jpg" 
                            alt="Profile Picture" 
                            className="w-24 h-24 rounded-full border-4 border-gray-300"
                        />
                        <div className="ml-4">
                            <h2 className="text-3xl font-bold text-gray-800">John Doe</h2>
                            <p className="text-gray-600">CEO, Taxation Co.</p>
                            <p className="text-gray-600">john.doe@example.com</p>
                        </div>
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200 ease-in-out">
                        Edit Profile
                    </button>
                </div>
                <div className="mt-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Profile Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-100 rounded-lg">
                            <h4 className="font-bold text-gray-700">Phone Number</h4>
                            <p className="text-gray-600">+92 335 1235957</p>
                        </div>
                        <div className="p-4 bg-gray-100 rounded-lg">
                            <h4 className="font-bold text-gray-700">Address</h4>
                            <p className="text-gray-600">123 Taxation Street, Islamabad, Pakistan</p>
                        </div>
                        <div className="p-4 bg-gray-100 rounded-lg">
                            <h4 className="font-bold text-gray-700">Recent Activity</h4>
                            <p className="text-gray-600">Filed tax return for XYZ Ltd.</p>
                        </div>
                        <div className="p-4 bg-gray-100 rounded-lg">
                            <h4 className="font-bold text-gray-700">Membership</h4>
                            <p className="text-gray-600">Platinum Member since 2019</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Recent Transactions</h3>
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Date</th>
                                <th className="py-2 px-4 border-b">Transaction ID</th>
                                <th className="py-2 px-4 border-b">Amount</th>
                                <th className="py-2 px-4 border-b">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">2023-07-16</td>
                                <td className="py-2 px-4 border-b">TXN12345678</td>
                                <td className="py-2 px-4 border-b">$500</td>
                                <td className="py-2 px-4 border-b">Completed</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">2023-06-30</td>
                                <td className="py-2 px-4 border-b">TXN87654321</td>
                                <td className="py-2 px-4 border-b">$750</td>
                                <td className="py-2 px-4 border-b">Pending</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Profile;
