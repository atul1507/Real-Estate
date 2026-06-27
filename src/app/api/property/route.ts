import { asyncHandler } from "@/lib/api/asyncHandler";

import {

    createPropertyController,

    getPropertiesController

} from "@/controllers/property.controller";





export const POST = asyncHandler(

    createPropertyController

);





export const GET = asyncHandler(

    getPropertiesController

);