// app/login/page.js
"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import LoginForm from '../components/Auth/LoginForm'
import axios from 'axios'
import { BASE_URL } from '../constant/constant'
import toast, { Toast } from '../components/Toast'

const Login = () => {
    const router = useRouter()
    const handleLogin = async (credentials) => {
        try {
            console.log("requesting");
            console.log("credentials", credentials);
            const response = await axios.post(`${BASE_URL}auth/login`, credentials);
    
            console.log("response", response?.data?.success);
            if (response?.data?.success) {
                router.push('/dashboard');
            } else {
                toast.error(`Login failed. ${response?.data?.message}`);
            }
        } catch (error) {
            console.error('Login error:', error);
            toast.error(`Login failed. ${error}`);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
            <Toast />
            <LoginForm onLogin={handleLogin} />
        </div>
    )
}

export default Login
