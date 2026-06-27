import { PropertyCategory } from "@/types/property.types";





export interface CreatePropertyDTO {

    title: string;

    description: string;

    price: number;

    city: string;

    address: string;

    propertyType: "BUY" | "RENT";

    category: PropertyCategory;

    bedrooms?: number;

    bathrooms?: number;

    balcony?: number;

    area: number;

}