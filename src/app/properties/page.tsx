"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, ChevronDown } from "lucide-react";

import PropertyList from "@/components/property/PropertyList";


export default function PropertiesPage() {

    const router = useRouter();

    const [mode, setMode] = useState("buy");
    const [city, setCity] = useState("");
    const [cityOpen, setCityOpen] = useState(false);
    const [citySearch, setCitySearch] = useState("");
    const [searchedCity, setSearchedCity] = useState("");


    const cities = [
        "Varanasi",
        "Delhi",
        "Mumbai",
        "Bangalore",
        "Hyderabad",
        "Pune",
        "Lucknow",
        "Gorakhpur",
        "Noida"
    ];


    const filteredCities = cities.filter(
        item => item.toLowerCase().includes(citySearch.toLowerCase())
    );



    return (

        <>

            {/* HERO SECTION */}

            <section className="relative h-screen w-full overflow-hidden bg-black">


                {/* IMAGE */}

                <Image
                    src="/images/properties-home.png"
                    alt="Properties"
                    fill
                    priority
                    className="object-cover hidden md:block"
                />





                {/* CONTENT */}

                <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">


                    <div className="w-full md:w-[55%]">



                        {/* HEADING */}

                        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">


                            <span className="text-blue-600 [filter:drop-shadow(0_0_18px_#2563eb)]">

                                Properties to {mode} in

                            </span>


                            {" "}


                            <span className="text-orange-200">

                                {city || "India"}

                            </span>


                        </h1>







                        <p className="mt-6 text-gray-300 text-lg">

                            8K+ listings added daily and 74K+ total verified

                        </p>









                        {/* SEARCH BOX */}

                        <div className="mt-10 w-full max-w-2xl">


                            {/* MODE SELECT */}

                            <div className="grid grid-cols-2 overflow-hidden rounded-t-xl bg-blue-600/20 backdrop-blur-md">


                                <button onClick={() => setMode("buy")} className={`py-3 font-bold transition cursor-pointer ${mode === "buy" ? "bg-blue-700 text-white" : "text-blue-100"}`}>

                                    BUY

                                </button>



                                <button onClick={() => setMode("rent")} className={`py-3 font-bold transition cursor-pointer ${mode === "rent" ? "bg-blue-700 text-white" : "text-blue-100"}`}>

                                    RENT

                                </button>


                            </div>








                            {/* SEARCH BAR */}

                            <div className="relative bg-white rounded-b-xl h-16 flex items-center">





                                {/* CITY */}

                                <div className="relative w-[28%] h-full">


                                    <button onClick={() => setCityOpen(!cityOpen)} className="w-full h-full px-6 flex items-center justify-between text-black cursor-pointer">

                                        <span>{city || "Select City"}</span>

                                        <ChevronDown size={18} />

                                    </button>







                                    {/* DROPDOWN */}


                                    {

                                        cityOpen && (

                                            <div className="absolute top-18 left-0 w-56 bg-white rounded-xl shadow-xl p-2 z-50">


                                                <input value={citySearch} onChange={(e) => setCitySearch(e.target.value)} placeholder="Search city" className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none text-sm text-black mb-2 focus:border-blue-600" />


                                                <div className="max-h-32 overflow-y-auto">


                                                    {

                                                        filteredCities.map((item) => (


                                                            <div
                                                                key={item}
                                                                onClick={() => {

                                                                    setCity(item);
                                                                    setCityOpen(false);
                                                                    setCitySearch("");

                                                                }}
                                                                className="px-3 py-1.5 rounded-md text-sm text-black hover:bg-orange-100 transition cursor-pointer"
                                                            >

                                                                {item}

                                                            </div>


                                                        ))

                                                    }


                                                </div>


                                            </div>

                                        )

                                    }


                                </div>








                                {/* SEPARATOR */}

                                <div className="h-10 w-px bg-gray-300" />







                                {/* INPUT */}

                                <div className="flex-1 h-full flex items-center px-6 gap-3">


                                    <Search size={22} className="text-gray-400" />


                                    <input placeholder="Search locality, project, or builder" className="w-full outline-none text-black" />


                                </div>








                                {/* SEPARATOR */}

                                <div className="h-10 w-px bg-gray-300" />









                                {/* BUTTON */}

                                <div className="px-4">


                                    <button onClick={() => {


                                        if (!city) {

                                            return;

                                        }


                                        router.push(
                                            `/properties/${mode}?city=${city}`
                                        );


                                    }} className="px-10 py-3 rounded-full bg-orange-200 text-black font-bold hover:bg-orange-300 transition cursor-pointer">

                                        Search

                                    </button>


                                </div>




                            </div>


                        </div>


                    </div>


                </div>


            </section>









            {/* PROPERTY SECTION */}

            <PropertyList mode={mode} featuredOnly={true} />



        </>

    );

}