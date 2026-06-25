import { NextResponse } from "next/server";


import { asyncHandler } from "@/lib/api/asyncHandler";


import { ApiResponse } from "@/lib/api/ApiResponse";









export const POST = asyncHandler(


    async()=>{





        const response = NextResponse.json(


            new ApiResponse(

                200,

                "Logout successful"

            )


        );










        response.cookies.set(

            "token",

            "",

            {


                httpOnly:true,


                expires:new Date(0)


            }


        );










        return response;



    }


);