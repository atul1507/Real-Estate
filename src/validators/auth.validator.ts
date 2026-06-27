import { z } from "zod";





export const RegisterSchema = z.object({

    name: z

        .string()

        .trim()

        .min(3, "Name must be at least 3 characters")

        .max(50, "Name cannot exceed 50 characters"),





    email: z

        .email("Invalid email address")

        .transform((email) => email.toLowerCase()),





    password: z

        .string()

        .min(8, "Password must be at least 8 characters")

});









export function validateRegister(

    data: unknown

) {

    return RegisterSchema.parse(data);

}