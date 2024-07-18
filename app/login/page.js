// app/login/page.js
"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import LoginForm from '../components/Auth/LoginForm'

const Login = () => {
    const router = useRouter()
    const handleLogin = () => {
        router.push('/dashboard')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
            <LoginForm onLogin={handleLogin} />
        </div>
    )
}

export default Login
