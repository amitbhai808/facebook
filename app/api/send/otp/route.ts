import { NextResponse } from 'next/server';
import { OTPEmailTemplate } from '@/components/emails/email-otp-tamplate';
import { Resend } from 'resend';
import * as React from 'react';
import { prisma } from '@/lib/prisma';


// app/api/verify-otp/route.ts
export async function POST(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { email, otp } = await request.json();

    const user = await prisma.user.findUnique({
        where: { email },
        select: { otp: true, otpExpires: true, password: true }
    });

    if (!user || user.otp !== otp) {
        return NextResponse.json({ error: 'Invalid OTP' }, { status: 401 });
    }

    if (new Date() > user.otpExpires!) {
        return NextResponse.json({ error: 'OTP expired' }, { status: 410 });
    }

    // Finalize registration
    await prisma.user.update({
        where: { email },
        data: {
            emailVerified: new Date(),
            otp: null,
            otpExpires: null,
            // Set actual password here
        }
    });

    await resend.emails.send({
        from: 'SocioMart <security@sociomart.com>',
        to: email,
        subject: 'Welcome to SocioMart!',
        react: React.createElement(OTPEmailTemplate, { firstName: user.name ||'User', otp}),
    });

    return NextResponse.json({ success: true });
}