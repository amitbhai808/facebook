// lib/security.ts
import { randomBytes, timingSafeEqual } from "crypto";
import bcrypt from "bcryptjs";

const SALT_ROUNDS = 12;

// Secure OTP generation
export function generateSecureOTP(): string {
    return randomBytes(3).toString('hex').toUpperCase().slice(0, 6);
}

// Secure hashing with bcrypt
export async function hashData(data: string): Promise<string> {
    return bcrypt.hash(data, SALT_ROUNDS);
}

// Timing-safe comparison
export async function compareData(data: string, hash: string): Promise<boolean> {
    return bcrypt.compare(data, hash);
}

// Session token generation
export function generateSessionToken(): string {
    return randomBytes(32).toString('hex');
}