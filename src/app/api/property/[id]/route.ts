import { asyncHandler } from "@/lib/api/asyncHandler";

import { getPropertyByIdController } from "@/controllers/property.controller";





export const GET = asyncHandler(

    getPropertyByIdController

);