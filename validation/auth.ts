// lib/validation/auth.ts
import { object,string, z } from 'zod';


export const RegisterSchema = z.object({
    firstName: z.string()
        .min(1, "First name is required")
        .max(50, "First name cannot exceed 50 characters"),
    lastName: z.string()
        .min(1, "Last name is required")
        .max(50, "Last name cannot exceed 50 characters"),
    email: z.string()
        .email("Invalid email address format"),
    password: z.string()
        .min(8, "Password must be at least 8 characters")
        .max(32, "Password cannot exceed 32 characters"),
    researcherType: z.enum(['academic', 'medical', 'corporate', 'not_researcher'], {
        errorMap: () => ({ message: "Please select a valid researcher type" })
    }),
    institute: z.string()
        .min(2, "Institute name must be at least 2 characters")
        .optional(),
    department: z.string()
        .min(2, "Department name must be at least 2 characters")
        .optional(),
    gender: z.enum(['male', 'female'], {
        errorMap: () => ({ message: "Please select a valid gender" })
    }),
    agreedToTerms: z.boolean()
        .refine(val => val === true, "You must agree to the terms and conditions")
});


export const OTPSchema = z.object({
    otp: z.string().min(6, "OTP must be 6 characters long").max(6, "OTP must be 6 characters long"),
    email: z.string().email("Invalid email address"),
});

export const signInSchema = object({
    email: string({ required_error: "Email is required" })
        .min(1, "Email is required")
        .email("Invalid email"),
    password: string({ required_error: "Password is required" })
        .min(1, "Password is required")
        .min(8, "Password must be more than 8 characters")
        .max(32, "Password must be less than 32 characters"),
})



export type RegisterInput = z.infer<typeof RegisterSchema>;
export type OTPInput = z.infer<typeof OTPSchema>;
