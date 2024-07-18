"use client"
import React, { useState } from 'react'
import LoginForm from '../components/Auth/LoginForm';

const Dashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogin = () => {
      setIsLoggedIn(true);
    };
  return (
    <div>
        {isLoggedIn && (

        <div className="min-h-screen flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white flex flex-col">
          <div className="p-6 text-xl font-bold">
            Taxation Dashboard
          </div>
          <nav className="flex-1 p-6">
            <ul className="space-y-4">
              <li>
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Tax Reports
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Payments
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </aside>
  
        {/* Main content */}
        <div className="flex-1 p-6 bg-gray-100">
          <header className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
            <div className="flex items-center space-x-4">
              <a href="/profile" className="text-gray-700 hover:underline">Profile</a>
              <a href="/login" className="text-gray-700 hover:underline">Logout</a>
            </div>
          </header>
          <main>
            {/* Add your main content here */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
              <p>Welcome to your dashboard. Here you can manage your tax reports, payments, and settings.</p>
            </div>
          </main>
        </div>
      </div>
      )}
    </div>
  )
}

export default Dashboard
