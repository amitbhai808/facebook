// app/lib/auth.actions.ts
'use server';

import { signIn } from '@/lib/auth';
import { AuthError } from 'next-auth';

export async function signInWithCredentials(formData: FormData) {
    try {
        await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        });
        return { success: true };
    } catch (error) {
        if (error instanceof AuthError) {
            return { error: error.cause?.err?.message || 'Invalid credentials' };
        }
        return { error: 'An unknown error occurred' };
    }
}

export async function signInWithOAuth(provider: string) {
    try {
        await signIn(provider, { redirect: false });
        return { success: true };
    } catch (error) {
        if (error instanceof AuthError) {
            return { error: error.cause?.err?.message || 'Authentication failed' };
        }
        return { error: 'An unknown error occurred' };
    }
}