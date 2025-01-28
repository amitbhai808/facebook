// app/auth/forgot-password/page.tsx
'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const ForgotPassword: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
            {/* Logo */}
            <div className="mb-6">
                <img
                    src="/path/to/logo.png"
                    alt="Socimo Logo"
                    className="h-12"
                />
            </div>

            {/* Card */}
            <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
                {/* Heading */}
                <h1 className="text-2xl font-bold text-center mb-4">
                    Request a Password Reset
                </h1>

                {/* Input Field */}
                <form className="space-y-4">
                    <div className="relative">
                        <label htmlFor="email" className="sr-only">
                            Email Address
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="absolute top-2 right-4 text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 12h2a2 2 0 002-2V8a2 2 0 00-2-2h-4V4m0 0L8 8m4-4v4m0 4v8"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Reset Button */}
                    <Button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Reset Password
                    </Button>
                </form>

                {/* Back to Sign In */}
                <div className="mt-4 text-center">
                    <Link href="/authPage/signIn" className="text-blue-500 hover:underline font-medium">
                        Go Back to Sign In
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-6 text-center text-gray-500 text-sm">
                &copy; Copyright All Rights Reserved By Socimo 2020
            </footer>
        </div>
    );
};

export default ForgotPassword;