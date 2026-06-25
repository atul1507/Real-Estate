import { NextRequest, NextResponse } from "next/server";


import { ApiError } from "../api/ApiError";





type Handler = (

    request:NextRequest

)=>Promise<NextResponse>;







export function asyncHandler(

    handler:Handler

){



    return async function(

        request:NextRequest

    ){


        try{


            return await handler(

                request

            );


        }


        catch(error:any){



            console.log("API ERROR:", error);





            if(error instanceof ApiError){


                return NextResponse.json(

                    {

                        success:false,


                        message:error.message

                    },


                    {

                        status:error.statusCode

                    }

                );


            }








            return NextResponse.json(

                {

                    success:false,


                    message:"Internal server error"

                },


                {

                    status:500

                }

            );



        }



    }


}