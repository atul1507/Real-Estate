import { cookies } from "next/headers";

import { prisma } from "@/lib/db";

import { ApiError } from "@/lib/api/ApiError";

import { verifyToken } from "@/lib/auth/token";

import { AuthenticatedUser } from "@/types/auth.types";





export async function getCurrentUser(): Promise<AuthenticatedUser> {

    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;





    if (!token) {

        throw new ApiError(

            401,

            "Unauthorized"

        );

    }






    let payload;

    try {

        payload = verifyToken(token);

    }

    catch {

        throw new ApiError(

            401,

            "Invalid or expired token"

        );

    }







    const user = await prisma.user.findUnique({

        where: {

            id: payload.id

        },

        select: {

            id: true,

            name: true,

            email: true,

            role: true,

            createdAt: true,

            updatedAt: true

        }

    });







    if (!user) {

        throw new ApiError(

            401,

            "User not found"

        );

    }






    return user;

}