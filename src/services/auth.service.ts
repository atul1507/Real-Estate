import { prisma } from "@/lib/db";

import { ApiError } from "@/lib/api/ApiError";

import { hashPassword } from "@/lib/auth/hash";

import { RegisterUserDTO } from "@/dto/auth.dto";






export async function registerUser(

    data: RegisterUserDTO

) {



    const existingUser = await prisma.user.findUnique({

        where: {

            email: data.email

        }

    });





    if (existingUser) {

        throw new ApiError(

            409,

            "User already exists"

        );

    }






    const hashedPassword = await hashPassword(

        data.password

    );






    const user = await prisma.user.create({

        data: {

            name: data.name,

            email: data.email,

            password: hashedPassword

        },

        select: {

            id: true,

            name: true,

            email: true,

            role: true

        }

    });






    return user;

}