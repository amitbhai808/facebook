import { prisma } from "@/lib/prisma";
import { date } from "zod";

// app/api/verify-email/route.ts
export async function POST(request: Request) {
    const { token } = await request.json();

    const verificationToken = await prisma.verificationToken.findUnique({
        where: { token }
    });

    if (!verificationToken || verificationToken.expires < new Date()) {
        return Response.json({ error: "Invalid token" }, { status: 400 });
    }

    await prisma.user.update({
        where: { email: verificationToken.identifier },
        data: { emailVerified: null}
    });

    await prisma.verificationToken.delete({
        where: { token }
    });

    return Response.json({ success: true });
}