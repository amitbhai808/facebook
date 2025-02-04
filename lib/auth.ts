
import CredentialsProvider from "next-auth/providers/credentials";
import { signInSchema } from "../validation/auth";
import { prisma } from "../lib/prisma";
import { compareData } from "./security";
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const parsedCredentials = signInSchema.safeParse(credentials)
                if (!parsedCredentials.success) {
                    return null
                }
                const { email, password } = parsedCredentials.data;
                const user = await prisma.user.findUnique({
                    where: { email }
                })
                if (!user || !user.password) {
                    return null
                }
                const passwordsMatch = await compareData(password, user.password)
                if (!passwordsMatch) {
                    return null
                }
                return {
                    id: user.id,
                    email: user.email,
                    role: user.role
                }
            }
        })
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role
                token.id = user.id
                token.email = user.email
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string
                session.user.email = token.email as string
                session.user.role = token.role as string
            }
            return session
        }
    },
    session: {
        strategy: "jwt",
        maxAge: 7 * 24 * 60 * 60 // 30 days
    },
    pages: {
        signIn: "/auth/signIn"
    },
    secret: process.env.NEXTAUTH_SECRET,

})
