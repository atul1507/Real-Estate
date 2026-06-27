import { NextRequest, NextResponse } from "next/server";

import { ApiError } from "./ApiError";





type Handler = (

    request: NextRequest,

    context?: any

) => Promise<NextResponse>;





export function asyncHandler(

    handler: Handler

) {

    return async function (

        request: NextRequest,

        context?: any

    ) {

        try {

            return await handler(

                request,

                context

            );

        }

        catch (error: any) {

            console.log("API ERROR:", error);





            if (error instanceof ApiError) {

                return NextResponse.json(

                    {

                        success: false,

                        message: error.message

                    },

                    {

                        status: error.statusCode

                    }

                );

            }





            return NextResponse.json(

                {

                    success: false,

                    message: "Internal server error"

                },

                {

                    status: 500

                }

            );

        }

    };

}