import { NextRequest, NextResponse } from "next/server";

import { ApiError } from "@/lib/api/ApiError";
import { ApiResponse } from "@/lib/api/ApiResponse";

import { createToken } from "@/lib/auth/token";

import { registerUser } from "@/services/auth.service";

import { validateRegister } from "@/validators/auth.validator";



export async function registerController(

    request: NextRequest

) {

    const {

        name,

        email,

        password

    } = await request.json();





    validateRegister({

    name,

    email,

    password

});






    const user = await registerUser({

        name,

        email,

        password

    });








    const token = createToken({

        id: user.id,

        email: user.email,

        role: user.role

    });








    const response = NextResponse.json(

        new ApiResponse(

            201,

            "Account created successfully",

            user

        ),

        {

            status: 201

        }

    );








    response.cookies.set(

        "token",

        token,

        {

            httpOnly: true,

            secure: process.env.NODE_ENV === "production",

            sameSite: "strict",

            maxAge: 60 * 60 * 24 * 7

        }

    );








    return response;

}