import { z } from "zod";

import { PROPERTY_CATEGORIES, PROPERTY_TYPES } from "@/constants/property";





export const CreatePropertySchema = z.object({

    title: z
        .string()
        .trim()
        .min(5, "Title must be at least 5 characters")
        .max(120, "Title cannot exceed 120 characters"),



    description: z
        .string()
        .trim()
        .min(20, "Description must be at least 20 characters")
        .max(5000, "Description cannot exceed 5000 characters"),



    price: z
        .number()
        .positive("Price must be greater than zero"),



    city: z
        .string()
        .trim()
        .min(2),



    address: z
        .string()
        .trim()
        .min(5),



    propertyType: z.enum(PROPERTY_TYPES),



    category: z.enum(PROPERTY_CATEGORIES),



    bedrooms: z
        .number()
        .int()
        .min(0)
        .optional(),



    bathrooms: z
        .number()
        .int()
        .min(0)
        .optional(),



    balcony: z
        .number()
        .int()
        .min(0)
        .optional(),



    area: z
        .number()
        .positive("Area must be greater than zero")

});





export function validateCreateProperty(

    data: unknown

) {

    return CreatePropertySchema.parse(data);

}