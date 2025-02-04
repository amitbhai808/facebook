import { Resend } from "resend";
import { OTPEmailTemplate } from "@/components/emails/email-otp-tamplate";
import { ReactElement } from "react";

// Safely initialize Resend with fallback
const getResendClient = () => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        throw new Error("RESEND_API_KEY environment variable is missing");
    }
    return new Resend(apiKey);
};

export const sendVerificationEmail = async (email: string, token: string, firstName: string) => {
    try {
        const resend = getResendClient();

        await resend.emails.send({
            from: "Socimo <security@socimo.com>",
            to: email,
            subject: "Verify your email",
            react: OTPEmailTemplate({ firstName, otp: token }) as ReactElement
        });

    } catch (error) {
        console.error("Email sending failed:", error);
        throw new Error("Failed to send verification email");
    }
};