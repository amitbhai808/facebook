// middleware/auth.ts
import { NextRequest, NextResponse } from 'next/server';
import { verifySession, deleteSessionCookie, getSessionCookie } from '@/lib/session';

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/api/private/:path*',
    ],
};

export async function middleware(request: NextRequest) {
    const sessionToken = getSessionCookie(request);

    if (!sessionToken) {
        return handleUnauthenticated(request);
    }

    const userId = await verifySession(sessionToken);

    if (!userId) {
        return handleInvalidSession(request);
    }

    // Add user to request headers for backend APIs
    const headers = new Headers(request.headers);
    headers.set('x-user-id', userId);

    return NextResponse.next({
        request: {
            headers,
        },
    });
}

function handleUnauthenticated(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/api')) {
        return new NextResponse(
            JSON.stringify({ error: 'Authentication required' }),
            { status: 401, headers: { 'content-type': 'application/json' } }
        );
    }

    return NextResponse.redirect(new URL('/login', request.url));
}

function handleInvalidSession(request: NextRequest) {
    const response = request.nextUrl.pathname.startsWith('/api')
        ? new NextResponse(
            JSON.stringify({ error: 'Invalid session' }),
            { status: 401, headers: { 'content-type': 'application/json' } }
        )
        : NextResponse.redirect(new URL('/login', request.url));

    return deleteSessionCookie(response);
}