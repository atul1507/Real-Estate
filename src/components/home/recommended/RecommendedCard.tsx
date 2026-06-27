"use client";

import Image from "next/image";

import { useState } from "react";

import {
    Bed,
    Bath,
    MapPin,
    Heart
} from "lucide-react";

export default function RecommendedCard({

    property

}: any) {

    const [loaded, setLoaded] = useState(false);

    const [favorite, setFavorite] = useState(false);

    return (

        <div className="h-[400px] bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">




            {/* IMAGE */}

            <div className="relative h-[60%] overflow-hidden">



                {!loaded && (

                    <div className="absolute inset-0 animate-pulse bg-gray-200" />

                )}





                <Image

                    src="/images/property-placeholder.jpg"

                    alt={property.title}

                    fill

                    className={`object-cover transition-all duration-500 group-hover:scale-110 ${loaded ? "opacity-100" : "opacity-0"}`}

                    onLoad={() => setLoaded(true)}

                />







                {/* FAVORITE BUTTON */}

                <button

                    onClick={() => setFavorite(!favorite)}

                    className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-md transition hover:scale-110"

                >

                    <Heart

                        size={20}

                        className={`${favorite ? "fill-red-500 text-red-500" : "text-gray-600"}`}

                    />

                </button>

            </div>








            {/* CONTENT */}

            <div className="h-[40%] p-4 flex flex-col justify-between">




                <div className="flex items-center justify-between">

                    <p className="text-xs font-semibold text-blue-600">

                        {property.category}

                    </p>

                    <div className="flex items-center gap-1 text-xs text-gray-500">

                        <MapPin size={12} />

                        <span className="truncate">

                            {property.location}

                        </span>

                    </div>

                </div>






                <h3 className="text-lg font-bold text-gray-900 truncate">

                    {property.title}

                </h3>






                <h2 className="text-2xl font-bold text-blue-600">

                    {property.price}

                </h2>






                <div className="flex items-center justify-between border-t pt-3 text-sm text-gray-600">

                    <div className="flex items-center gap-1">

                        <Bed size={15} />

                        <span>{property.bedroom}</span>

                    </div>





                    <div className="flex items-center gap-1">

                        <Bath size={15} />

                        <span>{property.bathroom}</span>

                    </div>





                    <span>

                        {property.area}

                    </span>

                </div>

            </div>

        </div>

    );

}