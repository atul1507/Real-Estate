import { NextRequest, NextResponse } from "next/server";


import { prisma } from "@/lib/db";


import { comparePassword } from "@/lib/auth/hash";


import { createToken } from "@/lib/auth/token";


import { asyncHandler } from "@/lib/api/asyncHandler";


import { ApiError } from "@/lib/api/ApiError";


import { ApiResponse } from "@/lib/api/ApiResponse";









export const POST = asyncHandler(


    async(

        request:NextRequest

    )=>{





        const {

            email,

            password

        } = await request.json();










        if(

            !email ||

            !password

        ){


            throw new ApiError(

                400,

                "Email and password required"

            );


        }









        const user = await prisma.user.findUnique({


            where:{


                email


            }


        });










        if(!user){


            throw new ApiError(

                401,

                "Invalid email or password"

            );


        }










        const isPasswordCorrect = await comparePassword(


            password,


            user.password


        );









        if(!isPasswordCorrect){


            throw new ApiError(

                401,

                "Invalid email or password"

            );


        }










        const token = createToken({


            id:user.id,


            email:user.email,


            role:user.role


        });









        const response = NextResponse.json(


            new ApiResponse(

                200,

                "Login successful",

                {

                    id:user.id,


                    name:user.name,


                    email:user.email,


                    role:user.role

                }


            ),


            {

                status:200

            }


        );










        response.cookies.set(

            "token",

            token,

            {


                httpOnly:true,


                secure:process.env.NODE_ENV === "production",


                sameSite:"strict",


                maxAge:60 * 60 * 24 * 7


            }


        );










        return response;



    }


);