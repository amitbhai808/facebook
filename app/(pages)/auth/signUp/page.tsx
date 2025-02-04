'use client'
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface FormState {
    message: string | null;
    success: boolean;
    errors: {
        [key: string]: string[];
    };
}

const SignUp = () => {
    const [isPending, setIsPending] = useState(false);
    const [formState, setFormState] = useState<FormState>({
        message: null,
        success: false,
        errors: {},
    });

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsPending(true);
        setFormState({ message: null, success: false, errors: {} });

        const formData = new FormData(e.currentTarget);
        const userData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            password: formData.get('password'),
            researcherType: formData.get('researcherType'),
            institute: formData.get('institute') || undefined,
            department: formData.get('department') || undefined,
            gender: formData.get('gender'),
            agreedToTerms: Boolean(formData.get('agreedToTerms'))
        };

        try {

            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();

            if (!response.ok) {
                setFormState({
                    message: data.message || 'Registration failed',
                    success: false,
                    errors: data.errors || {},
                });
                return;
            }

            setFormState({
                message: 'Registration successful! Redirecting...',
                success: true,
                errors: {},
            });

            // Redirect to sign-in page after successful registration
            setTimeout(() => {
                window.location.href = '/auth/signIn';
            }, 2000);

        } catch (error) {
            console.error('Registration error:', error);
            setFormState({
                message: 'An error occurred during registration',
                success: false,
                errors: {},
            });
        } finally {
            setIsPending(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Left Section */}
                <div className="w-1/2 bg-blue-500 text-white p-10 flex flex-col justify-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold">Welcome to Socimo</h1>
                        <p className="text-lg">
                            Socimo is a platform for researchers, students, and academic individuals.
                            Join for free to share ideas and research.
                        </p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-1/2 p-10">
                    <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

                    {formState.message && (
                        <div className={`mb-4 p-3 rounded ${formState.success ?
                            'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {formState.message}
                        </div>
                    )}

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                        {/* Name Fields */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="firstName">First Name</Label>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    required
                                />
                                {formState.errors?.firstName?.map((error, index) => (
                                    <p key={index} className="text-red-500 text-sm mt-1">{error}</p>
                                ))}
                            </div>
                            <div>
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    required
                                />
                                {formState.errors?.lastName?.map((error, index) => (
                                    <p key={index} className="text-red-500 text-sm mt-1">{error}</p>
                                ))}
                            </div>
                        </div>

                        {/* Email & Password */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email @"
                                    required
                                />
                                {formState.errors?.email?.map((error, index) => (
                                    <p key={index} className="text-red-500 text-sm mt-1">{error}</p>
                                ))}
                            </div>
                            <div>
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    required
                                    minLength={8}
                                />
                                {formState.errors?.password?.map((error, index) => (
                                    <p key={index} className="text-red-500 text-sm mt-1">{error}</p>
                                ))}
                            </div>
                        </div>

                        {/* Researcher Type */}
                        <div className="space-y-2">
                            <Label>Researcher Type</Label>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    { value: 'academic', label: 'Academic or Student' },
                                    { value: 'medical', label: 'Medical' },
                                    { value: 'corporate', label: 'Corporate, Govt., or NGO' },
                                    { value: 'not_researcher', label: 'Not a Researcher' },
                                ].map((option) => (
                                    <label key={option.value} className="flex items-center">
                                        <input
                                            type="radio"
                                            name="researcherType"
                                            value={option.value}
                                            className="mr-2"
                                            required
                                        />
                                        {option.label}
                                    </label>
                                ))}
                            </div>
                            {formState.errors?.researcherType?.map((error, index) => (
                                <p key={index} className="text-red-500 text-sm mt-1">{error}</p>
                            ))}
                        </div>

                        {/* Institute & Department */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="institute">Institute/Company</Label>
                                <Input
                                    id="institute"
                                    name="institute"
                                    type="text"
                                    placeholder="Institute"
                                />
                            </div>
                            <div>
                                <Label htmlFor="department">Department</Label>
                                <Input
                                    id="department"
                                    name="department"
                                    type="text"
                                    placeholder="Department"
                                />
                            </div>
                        </div>

                        {/* Gender */}
                        <div className="space-y-2">
                            <Label>Gender</Label>
                            <div className="flex gap-4">
                                {['male', 'female'].map((gender) => (
                                    <label key={gender} className="flex items-center capitalize">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value={gender}
                                            className="mr-2"
                                            required
                                        />
                                        {gender}
                                    </label>
                                ))}
                            </div>
                            {formState.errors?.gender?.map((error, index) => (
                                <p key={index} className="text-red-500 text-sm mt-1">{error}</p>
                            ))}
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="agreedToTerms"
                                name="agreedToTerms"
                                className="w-4 h-4 text-blue-500 border-gray-300 rounded"
                                required
                            />
                            <label htmlFor="agreedToTerms" className="ml-2 text-sm text-gray-600">
                                I agree to the terms of services and privacy policy
                            </label>
                            {formState.errors?.agreedToTerms?.map((error, index) => (
                                <p key={index} className="text-red-500 text-sm mt-1">{error}</p>
                            ))}
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600/90 text-white py-2 px-4 rounded mt-4"
                            disabled={isPending}
                        >
                            {isPending ? 'Processing...' : 'Sign Up'}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;