import { NextRequest, NextResponse } from "next/server";

import { ApiResponse } from "@/lib/api/ApiResponse";

import { ApiError } from "@/lib/api/ApiError";

import { validateCreateProperty } from "@/validators/property.validator";

import { getCurrentUser } from "@/lib/auth/getCurrentUser";

import { createProperty, getProperties, getPropertyById } from "@/services/property.service";





export async function createPropertyController(

    request: NextRequest

) {

    const body = await request.json();





    const validatedData = validateCreateProperty(

        body

    );





    const user = await getCurrentUser();





    const property = await createProperty(

        validatedData,

        user

    );





    return NextResponse.json(

        new ApiResponse(

            201,

            "Property created successfully",

            property

        ),

        {

            status: 201

        }

    );

}

export async function getPropertiesController() {

    const properties = await getProperties();

    return NextResponse.json(

        new ApiResponse(

            200,

            "Properties fetched successfully",

            properties

        )

    );

}


export async function getPropertyByIdController(

    request: NextRequest,

    context: {

        params: Promise<{

            id: string;

        }>;

    }

) {

    const { id } = await context.params;

    const property = await getPropertyById(id);

    if (!property) {

        throw new ApiError(

            404,

            "Property not found"

        );

    }

    return NextResponse.json(

        new ApiResponse(

            200,

            "Property fetched successfully",

            property

        )

    );

}