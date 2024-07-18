"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');

    // Function to calculate password strength
    const handlePasswordChange = (e) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);

        // Calculate password strength
        if (passwordValue.length === 0) {
            setPasswordStrength('');
            setPasswordError('');
        } else if (passwordValue.length < 6) {
            setPasswordStrength('Weak');
            setPasswordError('Password should be at least 6 characters long.');
        } else if (passwordValue.length < 10) {
            setPasswordStrength('Fair');
            setPasswordError('');
        } else if (passwordValue.length < 14) {
            setPasswordStrength('Good');
            setPasswordError('');
        } else {
            setPasswordStrength('Strong');
            setPasswordError('');
        }
    };

    // Function to handle phone number validation
    const handlePhoneChange = (e) => {
        const phoneValue = e.target.value;
        setPhone(phoneValue);

        // Validate phone number (basic validation)
        const re = /^[0-9]{11}$/;
        if (!re.test(phoneValue)) {
            setPhoneError('Please enter a valid 11-digit phone number.');
        } else {
            setPhoneError('');
        }
    };

    // Function to handle email validation
    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);

        // Validate email (basic validation)
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(emailValue)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform form validation (e.g., match passwords)
        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match.');
            return;
        }

        // Navigate to dashboard or perform further actions
        router.push('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input
                            type="email"
                            id="email"
                            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${emailError ? 'border-red-500' : ''}`}
                            placeholder="Enter your email address"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        {emailError && (
                            <p className="text-sm text-red-500">{emailError}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${phoneError ? 'border-red-500' : ''}`}
                            placeholder="Enter your phone number"
                            value={phone}
                            onChange={handlePhoneChange}
                            required
                        />
                        {phoneError && (
                            <p className="text-sm text-red-500">{phoneError}</p>
                        )}
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type={passwordVisible ? "text" : "password"}
                            id="password"
                            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${passwordError ? 'border-red-500' : ''}`}
                            placeholder="Enter your password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        <div
                            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </div>
                        {password && (
                            <div className="text-sm text-gray-600 mt-1">
                                Password strength: <span className={`font-semibold ${getPasswordStrengthColor(passwordStrength)}`}>{passwordStrength}</span>
                            </div>
                        )}
                        {passwordError && (
                            <p className="text-sm text-red-500">{passwordError}</p>
                        )}
                    </div>
                    <div className="relative">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type={confirmPasswordVisible ? "text" : "password"}
                            id="confirmPassword"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <div
                            className="absolute top-9 right-0 pr-3 flex items-center cursor-pointer"
                            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                        >
                            {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-500 transition duration-200 ease-in-out"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Function to get password strength color
const getPasswordStrengthColor = (passwordStrength) => {
    switch (passwordStrength) {
        case 'Weak':
            return 'text-red-600';
        case 'Fair':
            return 'text-yellow-600';
        case 'Good':
            return 'text-green-600';
        case 'Strong':
            return 'text-blue-600';
        default:
            return '';
    }
};

export default SignUp;
