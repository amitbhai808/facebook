// app/actions/auth.ts
'use server';

import { authServices } from '@/lib/auth';
import { AuthResult } from '@/lib/auth';
import { z } from 'zod';

// Make sure this matches exactly with the schema in lib/validation/auth
export const RegisterSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    researcherType: z.enum(['academic', 'medical', 'corporate', 'not_researcher']),
    institute: z.string().optional(),
    department: z.string().optional(),
    gender: z.enum(['male', 'female']),
    agreedToTerms: z.literal(true, {
        errorMap: () => ({ message: "You must accept the terms and conditions" })
    })
});

export async function registerUser(prevState: AuthResult, formData: FormData): Promise<AuthResult> {

    try {
        const rawData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            password: formData.get('password'),
            researcherType: formData.get('researcherType'),
            institute: formData.get('institute') || '',
            department: formData.get('department') || '',
            gender: formData.get('gender'),
            agreedToTerms: formData.get('agreedToTerms') === 'on'
        } as const;

        // Validate the data
        const validatedData = RegisterSchema.parse(rawData);

        // Call auth service with validated data
        const result = await authServices.registerUser(validatedData);

        // If successful, return the result
        return {
            ...result,
            errors: result.errors || {} // Ensure errors is always defined
        };

    } catch (error) {
        console.error('Registration Error:', error);

        // Handle Zod validation errors
        if (error instanceof z.ZodError) {
            return {
                success: false,
                message: 'Validation failed',
                errors: Object.fromEntries(
                    Object.entries(error.flatten().fieldErrors).map(([key, value]) => [key, value ?? []])
                )
            };
        }

        // Handle other errors
        return {
            success: false,
            message: error instanceof Error ? error.message : 'An error occurred during registration',
            errors: {}
        };
    }
}
