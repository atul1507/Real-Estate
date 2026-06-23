"use client";


import {

    useState,
    Dispatch,
    SetStateAction

} from "react";


import {

    Heart,
    Phone,
    MapPin

} from "lucide-react";


import PropertyNavigation from "./PropertyNavigation";








type PropertyHeroInfoProps = {


    property: any;


    activeSection: string;


    setActiveSection: Dispatch<SetStateAction<string>>;


    scrollToSection: (section:string)=>void;


};









export default function PropertyHeroInfo({

    property,

    activeSection,

    setActiveSection,

    scrollToSection

}: PropertyHeroInfoProps) {






    const [liked,setLiked] = useState(false);










    return (


        <section className="sticky top-16 z-40 bg-slate-900 px-6 py-2">







            <div className="max-w-7xl mx-auto">








                {/* BASIC DETAILS CARD */}


                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[1.5rem] p-5 flex flex-col lg:flex-row justify-between gap-6">







                    {/* LEFT SIDE */}


                    <div className="flex flex-col md:flex-row gap-8">








                        {/* PRICE */}


                        <div>







                            <div className="flex flex-wrap items-end gap-2">





                                <h1 className="text-3xl lg:text-4xl font-bold text-orange-200">


                                    {property.price}


                                </h1>






                                <span className="text-gray-400 mb-1 text-sm">


                                    @ ₹4,500 per sqft


                                </span>





                            </div>








                            <p className="mt-2 text-blue-400 text-sm font-semibold">


                                Premium verified property


                            </p>






                        </div>











                        {/* SEPARATOR */}


                        <div className="hidden md:block w-px bg-white/20" />









                        {/* PROPERTY INFO */}


                        <div>






                            <h2 className="text-3xl font-bold text-white">


                                {property.bhk}


                            </h2>








                            <p className="mt-2 text-base text-gray-300 capitalize">


                                {property.category} for {property.type}


                            </p>








                            <p className="mt-2 flex items-center gap-2 text-sm text-gray-400">


                                <MapPin size={18}/>


                                {property.location}, India


                            </p>






                        </div>







                    </div>












                    {/* BUTTONS */}


                    <div className="flex flex-col justify-center gap-4 min-w-[220px]">








                        <button className="flex items-center justify-center gap-2 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-orange-200 hover:text-black transition cursor-pointer">



                            <Phone size={18}/>



                            Contact Owner



                        </button>











                        <button

                            onClick={()=>setLiked(!liked)}

                            className="flex items-center justify-center gap-2 py-3 rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition cursor-pointer"

                        >






                            <Heart

                                size={20}

                                className={`transition-all duration-300 ${
                                    
                                    liked
                                    
                                    ?

                                    "fill-pink-500 text-pink-500 scale-125"

                                    :

                                    ""

                                }`}

                            />







                            Wishlist







                        </button>







                    </div>







                </div>












                {/* SECTION NAVIGATION */}


                <PropertyNavigation


                    activeSection={activeSection}


                    setActiveSection={setActiveSection}


                    scrollToSection={scrollToSection}


                />








            </div>







        </section>


    );


}