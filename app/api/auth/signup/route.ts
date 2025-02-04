import { prisma } from "@/lib/prisma";
import { hashData } from "@/lib/security";
import { RegisterSchema } from "@/validation/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        // Validate request body
        const validationResult = RegisterSchema.safeParse(body);
        
        if (!validationResult.success) {
            const { fieldErrors: errors } = validationResult.error.flatten();
            return NextResponse.json(
                {
                    success: false,
                    message: "Validation failed",
                    errors
                },
                { status: 400 }
            );
        }

        const { email, password, ...userData } = validationResult.data;

        // Check for existing user
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Email already registered",
                    errors: { email: ["This email is already registered"] }
                },
                { status: 400 }
            );
        }

        // Hash password and create user
        const hashedPassword = await hashData(password);

        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                firstName: userData.firstName,
                lastName: userData.lastName,
                researcherType: userData.researcherType,
                institute: userData.institute || null,
                department: userData.department || null,
                gender: userData.gender,
                termsAcceptedAt: new Date(),
                role: "user",
            }
        });

        return NextResponse.json(
            {
                user: newUser,
                success: true,
                message: "Registration successful",
                userId: newUser.id
            },
            { status: 201 }
        );

    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            {
                success: false,
                message: "An error occurred during registration"
            },
            { status: 500 }
        );
    }
}