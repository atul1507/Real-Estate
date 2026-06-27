import { ApiError } from "@/lib/api/ApiError";





export function requireRole(

    userRole: string,

    ...allowedRoles: string[]

) {

    if (

        !allowedRoles.includes(userRole)

    ) {

        throw new ApiError(

            403,

            "You are not authorized to perform this action."

        );

    }

}