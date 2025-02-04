// app/auth/signin/page.tsx
'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signInWithCredentials, signInWithOAuth } from '@/lib/auth.actions';

const SignInPage: React.FC = () => {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFormSubmit = async (formData: FormData) => {
        setIsLoading(true);
        setError(null);
        

        try {
            const result = await signInWithCredentials(formData);

            if (result?.error) {
                setError(result.error);
            } else {
                router.push('/');
                router.refresh();
            }
        } catch (error) {
            setError('An unexpected error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    const handleOAuth = async (provider: string) => {
        setIsLoading(true);
        try {
            const result = await signInWithOAuth(provider);
            if (result?.error) setError(result.error);
        } catch (error) {
            setError('Failed to initiate OAuth flow');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="w-1/2 bg-blue-100 relative">
                    <div className="absolute bg-blue-500 rounded-full blur-3xl opacity-50" />
                    <div className="flex flex-col justify-center items-center h-full px-8">
                        <Image
                            src="/api/placeholder/300/600"
                            alt="Mobile preview"
                            width={300}
                            height={600}
                            className="w-[80%] max-h-screen rounded-md shadow-lg"
                        />
                    </div>
                </div>

                <div className="w-1/2 p-10 flex flex-col justify-between">
                    <div className="flex flex-col items-start">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
                        <h2 className="text-xl font-semibold text-blue-500">Socimo!</h2>

                        <form className="mt-6 w-full" action={handleFormSubmit}>
                            <div className="mb-4">
                                <Label className="block text-sm font-medium text-gray-700">
                                    Email
                                </Label>
                                <Input
                                    name="email"
                                    type="text"
                                    // value={username}
                                    // onChange={(event) => setUsername(event.target.value)}
                                    placeholder="User Name @"
                                    className="mt-2 w-full"
                                />
                            </div>

                            <div className="mb-4">
                                <Label className="block text-sm font-medium text-gray-700">
                                    Password
                                </Label>
                                <Input
                                    name="password"
                                    type="password"
                                    // value={password}
                                    // onChange={(event) => setPassword(event.target.value)}
                                    placeholder="Password"
                                    className="mt-2 w-full"
                                />
                            </div>

                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-200"
                                    />
                                    <span className="ml-2 text-sm text-gray-600">Remember Me</span>
                                </div>
                                <Link href="/authPage/forgetPassword" className="text-sm text-blue-500 hover:underline">
                                    Forgot Password?
                                </Link>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Login
                            </Button>
                        </form>

                        <div className="mt-6">
                            <div className="flex gap-4">
                                <Link href="/authPage/signUp" className="text-blue-500 hover:underline">
                                    <Label className="block text-sm font-medium text-gray-700">
                                        signup
                                    </Label>
                                </Link>
                                <Label className="text-sm text-gray-600 text-center">Or Login With</Label>
                            </div>

                            <div className="flex gap-4 mt-4">
                                <Button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 rounded px-4 py-2">
                                    <img
                                        src="https://via.placeholder.com/20"
                                        alt="Google"
                                        className="inline mr-2"
                                    />
                                    Google
                                </Button>

                                <Button className="flex-1 bg-black hover:bg-gray-900 text-white rounded px-4 py-2">
                                    <img
                                        src="https://via.placeholder.com/20"
                                        alt="Apple"
                                        className="inline mr-2"
                                    />
                                    Apple
                                </Button>
                            </div>
                        </div>

                        <div className="mt-10 text-center text-sm text-gray-500">
                            By signing up, you accept the{' '}
                            <a href="#" className="text-blue-500 hover:underline">
                                Service Terms
                            </a>{' '}
                            and our{' '}
                            <a href="#" className="text-blue-500 hover:underline">
                                Privacy Policy
                            </a>
                            .
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;