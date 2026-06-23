"use client";


import {

    ChevronLeft,
    ChevronRight,
    IndianRupee,
    Home,
    Ruler,
    Layers,
    Bed,
    Bath,
    Grid2X2,
    ShieldCheck,
    Car,
    Droplets,
    Wrench,
    Building2,
    Sparkles

} from "lucide-react";


import { useState } from "react";








export default function OverviewSection({

    property

}: any) {





    const images = [

        "/house1.jpg",

        "/house2.jpg",

        "/house3.jpg"

    ];





    const [current, setCurrent] = useState(0);








    const nextImage = () => {


        setCurrent(

            current === images.length - 1

                ?

                0

                :

                current + 1

        );


    };








    const previousImage = () => {


        setCurrent(

            current === 0

                ?

                images.length - 1

                :

                current - 1

        );


    };











    const details = [


        {

            icon: <IndianRupee />,

            label: "Price",

            value: property.price

        },


        {

            icon: <Grid2X2 />,

            label: "Configuration",

            value: (

                <div className="flex flex-col gap-1">


                    <span className="flex items-center gap-2">

                        <Bed size={18} />

                        3 Bedrooms

                    </span>



                    <span className="flex items-center gap-2">

                        <Bath size={18} />

                        2 Bathrooms

                    </span>




                    <span className="flex items-center gap-2">

                        🌿

                        2 Balconies

                    </span>


                </div>

            )

        },


        {

            icon: <Ruler />,

            label: "Area",

            value: property.area

        },


        {

            icon: <Home />,

            label: "Property Type",

            value: property.category

        },


        {

            icon: <Bed />,

            label: "BHK",

            value: property.bhk

        },


        {

            icon: <Layers />,

            label: "Flooring",

            value: "Premium Marble"

        }


    ];









    return (

        <div>



            <h2 className="text-4xl font-bold text-orange-200 mb-10">

                Overview

            </h2>





            <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 items-center">






                {/* LEFT IMAGE SECTION */}


                <div className="group relative h-[320px] rounded-[1.5rem] overflow-hidden bg-gray-700">





                    <div className="h-full w-full flex items-center justify-center text-gray-400 text-lg">

                        {images[current]}

                    </div>







                    {/* LEFT ARROW */}


                    <button

                        onClick={previousImage}

                        className="absolute left-5 top-1/2 -translate-y-1/2
                    w-9 h-9 rounded-full
                    bg-black/40 text-white
                    flex items-center justify-center

                    opacity-0 -translate-x-5
                    group-hover:opacity-100
                    group-hover:translate-x-0

                    hover:bg-orange-200
                    hover:text-black

                    transition-all duration-300
                    cursor-pointer"

                    >

                        <ChevronLeft size={20} />

                    </button>








                    {/* RIGHT ARROW */}


                    <button

                        onClick={nextImage}

                        className="absolute right-5 top-1/2 -translate-y-1/2
                    w-9 h-9 rounded-full
                    bg-black/40 text-white
                    flex items-center justify-center

                    opacity-0 translate-x-5
                    group-hover:opacity-100
                    group-hover:translate-x-0

                    hover:bg-orange-200
                    hover:text-black

                    transition-all duration-300
                    cursor-pointer"

                    >

                        <ChevronRight size={20} />

                    </button>





                </div>












                {/* RIGHT DETAILS */}


                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">



                    {


                        details.map((item, index) => (



                            <div

                                key={index}

                                className="flex gap-3 items-center"

                            >





                                <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-orange-200 [&_svg]:w-5 [&_svg]:h-5">


                                    {item.icon}


                                </div>






                                <div>



                                    <p className="text-gray-400 text-sm">


                                        {item.label}


                                    </p>





                                    <div className="text-lg font-bold text-white capitalize">


                                        {

                                            item.label === "Configuration"

                                                ?

                                                <div className="flex gap-4 whitespace-nowrap">


                                                    <span>
                                                        🛏 3 Bedrooms
                                                    </span>


                                                    <span>
                                                        🛁 2 Bathrooms
                                                    </span>


                                                    <span>
                                                        🌿 2 Balconies
                                                    </span>


                                                </div>


                                                :

                                                item.value

                                        }


                                    </div>





                                </div>





                            </div>




                        ))

                    }



                </div>






            </div>









            {/* ADDRESS + FEATURES */}


            <div className="mt-12 rounded-[1.5rem] bg-white/10 backdrop-blur-xl border border-white/20 p-6">






                {/* ADDRESS */}


                <div>


                    <p className="text-gray-300 text-base">


                        <span className="font-bold text-orange-200">

                            Address:

                        </span>


                        {" "}Premium Area, {property.location}, India


                    </p>





                    <p className="mt-2 text-gray-400 text-sm">


                        Located in the heart of the city with easy access to schools,
                        hospitals, markets and transport facilities.


                    </p>



                </div>









                {/* FEATURES */}


                <div className="mt-8">



                    <h3 className="text-lg font-bold text-orange-200 mb-5">


                        Features


                    </h3>







                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 text-gray-300">






                        {[


                            {
                                icon: <Sparkles size={20} />,
                                text: "Vastu"
                            },


                            {
                                icon: <ShieldCheck size={20} />,
                                text: "Security"
                            },


                            {
                                icon: <Building2 size={20} />,
                                text: "Lift"
                            },


                            {
                                icon: <Wrench size={20} />,
                                text: "Maintenance"
                            },


                            {
                                icon: <Droplets size={20} />,
                                text: "Water Storage"
                            },


                            {
                                icon: <Car size={20} />,
                                text: "Parking"
                            }



                        ].map((feature, index) => (



                            <div

                                key={index}

                                className="flex items-center gap-3"

                            >


                                <div className="text-blue-400">

                                    {feature.icon}

                                </div>


                                <span className="text-sm">

                                    {feature.text}

                                </span>



                            </div>



                        ))}





                    </div>



                </div>





            </div>





        </div>


    );


}