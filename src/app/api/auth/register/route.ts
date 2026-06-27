import { asyncHandler } from "@/lib/api/asyncHandler";

import { registerController } from "@/controllers/auth.controller";





export const POST = asyncHandler(

    registerController

);