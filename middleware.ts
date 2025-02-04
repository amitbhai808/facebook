// import { withAuth } from "next-auth/middleware"
// import { NextResponse } from "next/server"

// export default withAuth(
//     // `withAuth` augments your `Request` with the user's token.
//     function middleware(req) {
//         return NextResponse.next();
//     },
//     {
//         callbacks: {
//             authorized: ({ token, req }) => {
//                 const { pathname } = req.nextUrl;
//                 if (pathname.startsWith("/auth/signIn") || pathname.startsWith("/auth/signUp")) {
//                     return true;
//                 }
//                 if (pathname.startsWith("/admin") && token?.role !== "admin") {
//                     return false;
//                 }
//                 return !!token;
//             }
//         },
//     },
// )

// export const config = {
//     matcher: ["/admin/:path*"]
// }

export { auth as middleware } from "@/lib/auth"