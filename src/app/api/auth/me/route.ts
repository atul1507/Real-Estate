import { NextRequest, NextResponse } from "next/server";


import { prisma } from "@/lib/db";


import { verifyToken } from "@/lib/auth/token";


import { asyncHandler } from "@/lib/api/asyncHandler";


import { ApiError } from "@/lib/api/ApiError";


import { ApiResponse } from "@/lib/api/ApiResponse";









export const GET = asyncHandler(


    async(

        request:NextRequest

    )=>{





        const token = request.cookies.get(

            "token"

        )?.value;









        if(!token){


            throw new ApiError(

                401,

                "Not logged in"

            );


        }










        const decoded = verifyToken(

            token

        );










        if(!decoded){


            throw new ApiError(

                401,

                "Invalid session"

            );


        }










        const user = await prisma.user.findUnique({


            where:{


                id:decoded.id


            },


            select:{


                id:true,


                name:true,


                email:true,


                role:true


            }


        });











        if(!user){


            throw new ApiError(

                404,

                "User not found"

            );


        }











        return NextResponse.json(


            new ApiResponse(

                200,

                "User fetched successfully",

                user

            )


        );



    }


);