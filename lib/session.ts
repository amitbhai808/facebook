// lib/session.ts
import { serialize, parse } from 'cookie';
import { NextRequest, NextResponse } from 'next/server';
import { SignJWT, jwtVerify } from 'jose';

const SESSION_COOKIE_NAME = '__Secure-session';
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function createSession(userId: string) {
    return new SignJWT({ userId })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(JWT_SECRET);
}

export async function verifySession(token: string) {
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        return payload.userId as string;
    } catch {
        return null;
    }
}

export function setSessionCookie(response: NextResponse, token: string) {
    const cookie = serialize(SESSION_COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
    });

    response.headers.append('Set-Cookie', cookie);
    return response;
}

export function deleteSessionCookie(response: NextResponse) {
    const cookie = serialize(SESSION_COOKIE_NAME, '', {
        maxAge: -1,
        path: '/',
    });

    response.headers.append('Set-Cookie', cookie);
    return response;
}

export function getSessionCookie(request: NextRequest) {
    const cookies = parse(request.headers.get('cookie') || '');
    return cookies[SESSION_COOKIE_NAME];
}