"use client";


import { useState } from "react";

import { properties } from "@/components/property/data/PropertyData";

import RecommendedCard from "./RecommendedCard";





export default function RecommendedSection({

    title,

    type

}: {

    title: string;

    type: string;

}) {



    const sectionProperties = properties.filter((property) => property.type === type && property.approved);




    const categories = Array.from(

        new Set(sectionProperties.map((property) => property.category))

    );




    const [active, setActive] = useState(categories[0]);





    if (sectionProperties.length === 0) {


        return null;


    }







    const filteredProperties = sectionProperties.filter(

        (property) => property.category === active

    );








    return (


        <div>


            <div className="mb-8">


                <h2 className="text-2xl font-bold text-gray-900">


                    {title}


                </h2>



                <p className="text-sm text-gray-500 mt-2">


                    Explore properties matching your needs


                </p>


            </div>









            {/* TABS */}


            <div className="flex gap-3 overflow-x-auto custom-scroll pb-4 mb-6">


                {

                    categories.map((category) => (


                        <button


                            key={category}


                            onClick={() => setActive(category)}


                            className={`
                            px-5 py-2 rounded-full text-sm whitespace-nowrap transition

                            ${active === category

                                    ?

                                    "bg-blue-600 text-white"

                                    :

                                    "bg-gray-100 text-gray-600 hover:bg-gray-200"

                                }
                            `}


                        >


                            {category}


                        </button>


                    ))

                }


            </div>










            {/* CARDS */}


            <div className="flex gap-5 overflow-x-auto custom-scroll pb-5 lg:grid lg:grid-cols-4 lg:overflow-visible">


                {

                    filteredProperties.map((property) => (


                        <div
                            key={property.id}
                            className="min-w-[260px] lg:min-w-0"
                        >


                            <RecommendedCard

                                property={property}

                            />


                        </div>


                    ))

                }


            </div>




        </div>


    )


}