"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";



import { properties } from "./data/PropertyData";

import ListingPropertyCard from "./cards/ListingPropertyCard";

import PropertyFilter from "./filters/PropertyFilters";





export default function PropertyList({

    mode,

    searchedCity,

    featuredOnly = false

}: {

    mode: string;

    searchedCity?: string;

    featuredOnly?: boolean;

}) {



    const [liked, setLiked] = useState<number[]>([]);

    const [animating, setAnimating] = useState<number | null>(null);

    const [showFilter, setShowFilter] = useState(false);

    const router = useRouter();





    const filtered = properties.filter((item) => {


        if (item.type !== mode) {

            return false;

        }



        if (featuredOnly) {

            return item.featured === true;

        }



        if (searchedCity) {

            return item.location === searchedCity;

        }



        return true;


    });







    const handleLike = (index: number) => {


        if (liked.includes(index)) {


            setLiked(

                liked.filter((item) => item !== index)

            );


        }


        else {


            setLiked(

                [...liked, index]

            );


            setAnimating(index);



            setTimeout(() => {

                setAnimating(null);

            }, 400);


        }


    };









    return (


        <section className="bg-slate-900 px-4 md:px-6 pt-8 pb-10 h-screen overflow-hidden">





            <div className="max-w-7xl mx-auto h-full flex flex-col">







                {/* HEADING + FILTER BUTTON */}


                <div className="mb-8 flex items-center justify-between gap-5">






                    <div className="rounded-2xl bg-blue-500 px-6 md:px-8 py-4 shadow-[0_0_35px_#2563eb]">


                        <h2 className="text-xl md:text-3xl font-bold text-white">


                            {

                                searchedCity

                                    ?

                                    `Properties to ${mode} in ${searchedCity}`

                                    :

                                    featuredOnly

                                        ?

                                        `Recommended Properties to ${mode}`

                                        :

                                        `Available Properties to ${mode}`

                            }


                        </h2>



                    </div>








                    {/* MOBILE FILTER BUTTON */}


                    <button onClick={() => setShowFilter(!showFilter)} className="md:hidden whitespace-nowrap px-7 py-3 rounded-full bg-orange-200 text-black font-bold cursor-pointer">

                        Filter +

                    </button>





                </div>












                {/* MOBILE FILTER */}


                {

                    showFilter && (


                        <div className="md:hidden mb-6 max-h-[350px] overflow-y-auto hide-scrollbar">


                            <PropertyFilter

                                mode={mode}

                            />


                        </div>


                    )

                }













                {/* CONTENT */}


                <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-8 flex-1 min-h-0">







                    {/* LEFT CARDS */}


                    <div className="overflow-y-auto hide-scrollbar pr-2 pb-10 min-h-0">





                        <>


                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">


                                {

                                    filtered.map((item, index) => (


                                        <ListingPropertyCard

                                            key={index}

                                            item={item}

                                            index={index}

                                            liked={liked}

                                            animating={animating}

                                            handleLike={handleLike}

                                        />


                                    ))

                                }


                            </div>







                            {

                                featuredOnly && (


                                    <div className="flex justify-center mt-10">


                                        <button

                                            onClick={() => router.push(`/properties/${mode}`)}

                                            className="px-10 py-3 rounded-full bg-orange-200 text-black font-bold hover:bg-white transition cursor-pointer"

                                        >


                                            Show More


                                        </button>


                                    </div>


                                )

                            }



                        </>





                    </div>









                    {/* DESKTOP FILTER */}


                    <div className="hidden md:block overflow-y-auto hide-scrollbar">


                        <PropertyFilter

                            mode={mode}

                        />


                    </div>






                </div>





            </div>





        </section>


    );


}