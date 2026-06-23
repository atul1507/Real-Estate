"use client";


import { motion } from "framer-motion";

import {

    ArrowUpRight

} from "lucide-react";


type Props = {


    icon: React.ReactNode;

    title: string;

    description: string;

    button: string;

    delay: number;


};




export default function ActionCard({

    icon,

    title,

    description,

    button,

    delay

}: Props) {



    return (


        <motion.div


            initial={{

                opacity: 0,

                y: 80

            }}


            whileInView={{

                opacity: 1,

                y: 0

            }}


            viewport={{

                once: true,

                amount: .3

            }}


            transition={{

                duration: .7,

                delay

            }}



            className="

group

flex
flex-col
items-center
text-center


px-10
py-16


rounded-3xl


bg-white


transition-all
duration-500


hover:-translate-y-5


hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]

"
        >



            {/* ICON */}


            <motion.div

                initial={{

                    scale: .7

                }}


                whileInView={{

                    scale: 1

                }}


                transition={{

                    duration: .5,

                    delay: delay + .2

                }}


                className="
                text-gray-900

                mb-8
                "
            >


                {icon}


            </motion.div>






            <h3

                className="
                text-2xl

                font-bold

                mb-5
                "
            >

                {title}

            </h3>






            <p

                className="
                text-gray-600

                leading-8

                max-w-sm

                mb-10
                "
            >

                {description}

            </p>







            <button

                className="
    relative

    overflow-hidden

    cursor-pointer

    group/button


    flex

    items-center

    justify-center

    gap-3


    border

    border-black


    rounded-xl


    px-10

    py-4


    font-semibold


    text-black


    transition-colors

    duration-500


    hover:text-white
    "
            >


                {/* BLACK FILL */}

                <span

                    className="
        absolute


        -left-10

        top-full


        w-[160%]

        h-[250%]


        bg-black


        rounded-[50%]


        transition-all

        duration-700

        ease-out


        group-hover/button:top-[-60%]

        group-hover/button:left-[-30%]
        "
                />






                {/* TEXT */}

                <span

                    className="
        relative

        z-10


        flex

        items-center

        gap-3
        "
                >


                    {button}




                    <ArrowUpRight

                        size={20}


                        className="
            transition-transform

            duration-300
            


            group-hover/button:translate-x-1

            group-hover/button:-translate-y-1
            "

                    />



                </span>




            </button>





        </motion.div>


    )


}