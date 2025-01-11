// app/auth/signup/page.tsx
'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SignUp: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Left Section */}
                <div className="w-1/2 bg-blue-500 text-white p-10 flex flex-col justify-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold">Welcome to Socimo</h1>
                        <p className="text-lg">
                            Socimo is a one and only platform for researchers, students, and
                            academic people. Everyone can join this platform free and share
                            ideas and research with seniors and juniors through comments and
                            opinions.
                        </p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-1/2 p-10">
                    <h2 className="text-2xl font-bold mb-6">Signup</h2>
                    <p className="text-gray-600 mb-8">
                        What type of researcher are you?
                    </p>

                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            {/* First Name */}
                            <div>
                                <Label htmlFor="firstName" className="block text-sm font-medium">
                                    First Name
                                </Label>
                                <Input id="firstName" type="text" placeholder="First Name" />
                            </div>

                            {/* Last Name */}
                            <div>
                                <Label htmlFor="lastName" className="block text-sm font-medium">
                                    Last Name
                                </Label>
                                <Input id="lastName" type="text" placeholder="Last Name" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Email */}
                            <div>
                                <Label htmlFor="email" className="block text-sm font-medium">
                                    Email
                                </Label>
                                <Input id="email" type="email" placeholder="Email @" />
                            </div>

                            {/* Password */}
                            <div>
                                <Label htmlFor="password" className="block text-sm font-medium">
                                    Password
                                </Label>
                                <Input id="password" type="password" placeholder="Password" />
                            </div>
                        </div>

                        {/* Researcher Type */}
                        <div className="space-y-2">
                            <Label className="block text-sm font-medium">Researcher Type</Label>
                            <div className="flex items-center gap-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="researcherType"
                                        value="academic"
                                        className="mr-2"
                                    />
                                    Academic or Student
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="researcherType"
                                        value="medical"
                                        className="mr-2"
                                    />
                                    Medical
                                </label>
                            </div>
                            <div className="flex items-center gap-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="researcherType"
                                        value="corporate"
                                        className="mr-2"
                                    />
                                    Corporate, Govt., or NGO
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="researcherType"
                                        value="not_researcher"
                                        className="mr-2"
                                    />
                                    Not a Researcher
                                </label>
                            </div>
                        </div>

                        {/* Institute & Department */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="institute" className="block text-sm font-medium">
                                    Institute, Company
                                </Label>
                                <Input id="institute" type="text" placeholder="Institute" />
                            </div>
                            <div>
                                <Label htmlFor="department" className="block text-sm font-medium">
                                    Department
                                </Label>
                                <Input id="department" type="text" placeholder="Department" />
                            </div>
                        </div>

                        {/* Gender */}
                        <div className="space-y-2">
                            <Label className="block text-sm font-medium">Gender</Label>
                            <div className="flex items-center gap-4">
                                <label className="flex items-center">
                                    <input type="radio" name="gender" value="male" className="mr-2" />
                                    Male
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        className="mr-2"
                                    />
                                    Female
                                </label>
                            </div>
                        </div>

                        {/* Terms & Signup */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-500 border-gray-300 rounded"
                            />
                            <span className="ml-2 text-sm text-gray-600">
                                I agree to the terms of services and acknowledge the privacy
                                policy
                            </span>
                        </div>

                        <Button className="w-full bg-blue-500 hover:bg-blue-600/90 text-white py-2 px-4 rounded mt-4">
                            Signup
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
