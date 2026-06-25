import Image from "next/image";





export default function Hero() {


    return (

        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">


            {/* BACKGROUND IMAGE */}

            <Image

                src="/images/hero-house.png"

                alt="Hero House"

                fill

                priority

                sizes="100vw"

                className="object-cover object-[center_top]"

            />





            {/* OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/70" />







            {/* CONTENT */}

            <div className="relative z-20 w-full max-w-5xl mx-auto text-center px-5">






                {/* TITLE */}

                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-2xl">

                    <span className="block md:inline">
                        Find Your
                    </span>

                    {" "}

                    <span className="block md:inline text-orange-200">
                        Dream Property
                    </span>

                </h1>







                {/* SUBTITLE */}

                <p className="mt-5 text-base md:text-xl text-white/90 drop-shadow-lg">

                    Find verified homes, rentals and properties across India

                </p>









                {/* SEARCH BOX */}

                <div id="hero-search" className="mt-12 scroll-mt-20 w-full p-5 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl flex flex-col md:flex-row gap-4">







                    <input

                        placeholder="Enter city or location"

                        className="flex-1 px-5 py-4 rounded-xl bg-white/90 shadow-sm outline-none text-black placeholder:text-gray-500"

                    />








                    <select className="px-6 py-4 rounded-xl bg-white/90 shadow-sm outline-none text-black cursor-pointer">


                        <option>

                            Buy

                        </option>


                        <option>

                            Rent

                        </option>


                    </select>









                    <button className="px-10 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-orange-200 hover:text-black transition-all duration-300 cursor-pointer">


                        Search


                    </button>







                </div>









                {/* TRUST TEXT */}

                <div className="mt-8 flex flex-wrap justify-center gap-8 text-white/90 text-sm font-medium">


                    <span>✓ Verified Properties</span>


                    <span>✓ Trusted Owners</span>


                    <span>✓ Easy Contact</span>


                </div>








            </div>





        </section>

    );


}