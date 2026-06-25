"use client";


import { motion } from "motion/react";
import Image from "next/image";
import { Bed, Bath } from "lucide-react";
import { useEffect, useState } from "react";





type Props = {

    property:any;

    mobileDirection:"left" | "right";

    desktopDirection:"left" | "right";

}





export default function AnimatedPropertyCard({

    property,

    mobileDirection,

    desktopDirection

}: Props) {





    const [screen, setScreen] = useState<
        "mobile" | "tablet" | "desktop" | null
    >(null);





    useEffect(() => {


        const check = () => {


            const width = window.innerWidth;



            if (width >= 1024) {

                setScreen("desktop");

            }

            else if (width >= 768) {

                setScreen("tablet");

            }

            else {

                setScreen("mobile");

            }

        };



        check();


        window.addEventListener(
            "resize",
            check
        );


        return () => {

            window.removeEventListener(
                "resize",
                check
            );

        }


    }, []);

    if(screen === null){

    return null;

}







    const direction =

        screen === "desktop"

            ?

            desktopDirection

            :

            screen === "tablet"

                ?

                "right"

                :

                mobileDirection;





    const startX = direction === "left" ? -200 : 200;







    return (



        <motion.div


            initial="hidden"

            whileInView="show"


            viewport={{

                once: true,

                amount: .6

            }}



            className="
            relative

            w-[280px]
            sm:w-80
            "
        >







            {/* DETAIL FIRST */}


            <motion.div


                variants={{


                    hidden: {

                        opacity: 0,

                        x: startX,

                        scale: .95

                    },


                    show: {

                        opacity: 1,

                        x: 0,

                        scale: 1,


                        transition: {

                            duration: .8,

                            ease: [0.16, 1, 0.3, 1]

                        }

                    }


                }}




                className="
                bg-white

                rounded-3xl

                shadow-2xl

                overflow-hidden

                pt-48
                sm:pt-56

                p-6
                "
            >



                <h3
                    className="
                    text-lg
                    sm:text-xl

                    font-bold

                    truncate
                    "
                >

                    {property.title}

                </h3>





                <h2
                    className="
                    mt-3

                    text-xl
                    sm:text-2xl

                    font-bold

                    text-blue-600
                    "
                >

                    {property.price}

                </h2>






                <p
                    className="
                    mt-3

                    text-sm

                    text-gray-500

                    line-clamp-2
                    "
                >

                    {property.description}

                </p>






                <div
                    className="
                    mt-6

                    flex
                    justify-between

                    text-sm
                    "
                >


                    <span className="flex gap-2">

                        <Bed size={18} />

                        {property.bedroom} Beds

                    </span>


                    <span className="flex gap-2">

                        <Bath size={18} />

                        {property.bathroom} Baths

                    </span>



                </div>




            </motion.div>










            {/* IMAGE SECOND */}


            <motion.div



                variants={{


                    hidden: {

                        opacity: 0,

                        x: startX,

                        scale: .95

                    },


                    show: {

                        opacity: 1,

                        x: 0,

                        scale: 1,


                        transition: {

                            delay: .55,

                            duration: .8,

                            ease: [0.16, 1, 0.3, 1]

                        }

                    }


                }}




                className="
                absolute

                top-0

                w-full

                h-44
                sm:h-52

                rounded-t-3xl

                overflow-hidden

                shadow-xl
                "
            >



                <Image

                    src="/images/hero-house.jpg"

                    alt="property"

                    fill

                    sizes="320px"

                    className="object-cover"

                />




                <div
                    className="
                    absolute

                    inset-x-0
                    bottom-0

                    h-24

                    bg-gradient-to-t

                    from-black/90

                    via-black/50

                    to-transparent
                    "
                />




                <p
                    className="
                    absolute

                    bottom-5
                    left-5

                    text-white
                    text-sm
                    "
                >

                    {property.location}

                </p>




            </motion.div>





        </motion.div>


    )


}