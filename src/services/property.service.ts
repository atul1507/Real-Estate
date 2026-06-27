import { prisma } from "@/lib/db";

import { CreatePropertyDTO } from "@/dto/property.dto";

import { AuthenticatedUser } from "@/types/auth.types";





export async function createProperty(

    data: CreatePropertyDTO,

    user: AuthenticatedUser

) {

    const property = await prisma.property.create({

        data: {

            title: data.title,

            description: data.description,

            price: data.price,

            city: data.city,

            address: data.address,

            propertyType: data.propertyType,

            category: data.category,

            bedrooms: data.bedrooms,

            bathrooms: data.bathrooms,

            balcony: data.balcony,

            area: data.area,

            ownerId: user.id

        },

        include: {

            owner: {

                select: {

                    id: true,

                    name: true,

                    email: true

                }

            },

            images: true

        }

    });





    return property;

}

export async function getProperties() {

    return await prisma.property.findMany({

        include: {

            owner: {

                select: {

                    id: true,

                    name: true,

                    email: true

                }

            },

            images: true

        },

        orderBy: {

            createdAt: "desc"

        }

    });

}

export async function getPropertyById(

    id: string

) {

    const property = await prisma.property.findUnique({

        where: {

            id

        },

        include: {

            owner: {

                select: {

                    id: true,

                    name: true,

                    email: true

                }

            },

            images: true

        }

    });

    return property;

}