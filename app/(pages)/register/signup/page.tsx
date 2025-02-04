// app/signup/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { authServices } from '@/lib/auth';
import { useRouter } from 'next/navigation';

const initialState = {
    success: false,
    message: '',
    errors: {} as Record<string, string[]>,
    redirectTo: ''
};

export default function SignupPage() {
    const router = useRouter();
    const [state, setState] = useState(initialState);
    const [isPending, setIsPending] = useState(false);

    const action = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsPending(true);
        const formData = new FormData(event.currentTarget);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        };
        try {
            const result = await authServices.registerUser(data);
            setState({ ...state, ...result });
        } catch (error) {
            setState({ ...state, success: false, message: 'Registration failed', errors: error as Record<string, string[]> });
        } finally {
            setIsPending(false);
        }
    };

    // Handle redirects after successful registration
    useEffect(() => {
        if (state.success && state.redirectTo) {
            router.push(state.redirectTo);
        }
    }, [state.success, state.redirectTo, router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form onSubmit={action} className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

                {/* Name Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input
                        name="name"
                        type="text"
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {state.errors?.name && (
                        <p className="text-red-500 text-sm mt-1">{state.errors.name.join(', ')}</p>
                    )}
                </div>

                {/* Email Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                        name="email"
                        type="email"
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {state.errors?.email && (
                        <p className="text-red-500 text-sm mt-1">{state.errors.email.join(', ')}</p>
                    )}
                </div>

                {/* Password Input */}
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Password</label>
                    <input
                        name="password"
                        type="password"
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {state.errors?.password && (
                        <p className="text-red-500 text-sm mt-1">{state.errors.password.join(', ')}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {isPending ? 'Processing...' : 'Sign Up'}
                </button>

                {/* Status Message */}
                {state.message && (
                    <p className={`mt-4 text-center ${state.success ? 'text-green-500' : 'text-red-500'}`}>
                        {state.message}
                    </p>
                )}
            </form>
        </div>
    );
}