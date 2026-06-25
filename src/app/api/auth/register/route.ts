import { NextRequest, NextResponse } from "next/server";


import { prisma } from "@/lib/db";


import { hashPassword } from "@/lib/auth/hash";


import { createToken } from "@/lib/auth/token";


import { asyncHandler } from "@/lib/api/asyncHandler";


import { ApiError } from "@/lib/api/ApiError";


import { ApiResponse } from "@/lib/api/ApiResponse";









export const POST = asyncHandler(


    async(

        request:NextRequest

    )=>{


        const {

            name,

            email,

            password

        } = await request.json();










        if(

            !name ||

            !email ||

            !password

        ){


            throw new ApiError(

                400,

                "All fields are required"

            );


        }









        const existingUser = await prisma.user.findUnique({


            where:{


                email


            }


        });








        if(existingUser){


            throw new ApiError(

                409,

                "Email already registered"

            );


        }









        const hashedPassword = await hashPassword(

            password

        );









        const user = await prisma.user.create({


            data:{


                name,


                email,


                password:hashedPassword


            },


            select:{


                id:true,


                name:true,


                email:true,


                role:true


            }


        });











        const token = createToken({


            id:user.id,


            email:user.email,


            role:user.role


        });











        const response = NextResponse.json(


            new ApiResponse(

                201,

                "Account created successfully",

                user

            ),


            {

                status:201

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