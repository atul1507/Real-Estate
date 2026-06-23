"use client";


import { useEffect, useRef, useState } from "react";

import Link from "next/link";

import { BadgeCheck, Heart, MapPin } from "lucide-react";





export default function ListingPropertyCard({

    item

}: any) {



    const [liked, setLiked] = useState(false);

    const [animate, setAnimate] = useState(false);

    const [visible, setVisible] = useState(false);

    const cardRef = useRef<HTMLDivElement>(null);






    useEffect(() => {


        const observer = new IntersectionObserver(


            ([entry]) => {


                if (entry.isIntersecting) {


                    setVisible(true);


                }


            },


            {

                threshold: 0.2

            }


        );




        if (cardRef.current) {


            observer.observe(cardRef.current);


        }





        return () => {


            if (cardRef.current) {


                observer.unobserve(cardRef.current);


            }


        };


    }, []);








    const handleLike = () => {


        if (!liked) {


            setAnimate(true);


            setTimeout(() => {


                setAnimate(false);


            }, 350);


        }



        setLiked(!liked);


    };









    return (


        <div

            ref={cardRef}

            className={`h-56 flex overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}

        >







            {/* LEFT IMAGE */}


            <div className="relative w-[38%] bg-gray-300 flex-shrink-0">



                {

                    item.featured && (


                        <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-bold text-blue-600">


                            Featured


                        </div>


                    )


                }






                <Link

                    href={`/properties/${item.id}`}

                    className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-orange-200 hover:text-black transition"

                >


                    View


                </Link>




            </div>









            {/* RIGHT DETAILS */}


            <div className="flex-1 p-4 flex flex-col justify-between">








                <div>








                    {/* TOP */}


                    <div className="flex justify-between items-center">







                        {

                            item.verified

                                ?


                                <div className="flex items-center gap-1 text-orange-200 text-sm font-bold">


                                    <BadgeCheck size={15} />


                                    Verified


                                </div>



                                :


                                <div className="h-5" />


                        }









                        <button

                            onClick={handleLike}

                            className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"

                        >


                            <Heart

                                size={19}

                                className={`transition-all duration-300 ${liked ? "fill-pink-500 text-pink-500" : "text-white"} ${animate ? "scale-150" : "scale-100"}`}

                            />


                        </button>







                    </div>









                    {/* TITLE */}


                    <h3 className="mt-3 text-lg font-bold text-white line-clamp-1">


                        {item.title}


                    </h3>









                    {/* LOCATION */}


                    <p className="mt-2 flex items-center gap-1 text-sm text-gray-300">


                        <MapPin size={15} />


                        {item.location}


                    </p>










                    {/* PRICE */}


                    <p className="mt-2 text-2xl font-bold text-blue-400">


                        {item.price}


                    </p>







                </div>









                {/* BOTTOM */}


                <div>





                    <div className="flex items-center gap-2 text-sm text-gray-300 overflow-hidden whitespace-nowrap">


                        <span className="shrink-0">

                            {item.bhk}

                        </span>


                        <span className="shrink-0">

                            •

                        </span>


                        <span className="shrink-0">

                            {item.area}

                        </span>


                        <span className="shrink-0">

                            •

                        </span>


                        <span className="truncate">

                            {item.category}

                        </span>


                    </div>







                    <p className="mt-1 text-sm text-orange-200 font-bold">


                        By: {item.owner}


                    </p>





                </div>






            </div>





        </div>


    );


}