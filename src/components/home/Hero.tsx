import Image from "next/image";





export default function Hero() {


    return (


        <section
            className="
            relative

            min-h-screen

            flex
            items-center
            justify-center

            overflow-hidden
            "
        >






            {/* BACKGROUND IMAGE */}


            <Image

                src="/images/hero-house.jpg"

                alt="Hero House"

                fill

                priority

                sizes="100vw"


                className="
                object-cover
                object-[center_top]
                "

            />









            {/* OVERLAY */}


            <div

                className="
                absolute

                inset-0

                bg-black/30

                z-10
                "

            />









            {/* CONTENT */}


            <div

                className="
                relative

                z-20

                w-full

                max-w-5xl

                mx-auto

                text-center

                px-5
                "

            >






                <h1

                    className="
                    text-4xl

                    md:text-6xl

                    font-bold

                    text-white
                    "

                >


                    Find Your Perfect Property


                </h1>









                <p

                    className="
                    mt-5

                    text-base
                    md:text-lg

                    text-gray-200
                    "

                >


                    Search properties for buy, rent and investment


                </p>









                {/* SEARCH BOX */}


                <div

                    id="hero-search"


                    className="
                    mt-10

                    scroll-mt-20

                    bg-white

                    shadow-2xl

                    rounded-2xl

                    p-5

                    flex

                    flex-col
                    md:flex-row

                    gap-4
                    "

                >







                    <input


                        placeholder="Enter city or location"


                        className="
                        flex-1

                        border
                        border-gray-300

                        p-3

                        rounded-lg

                        outline-none

                        focus:border-blue-600
                        "

                    />











                    <select


                        className="
                        border
                        border-gray-300

                        p-3

                        rounded-lg

                        outline-none

                        focus:border-blue-600
                        "

                    >



                        <option>

                            Buy

                        </option>



                        <option>

                            Rent

                        </option>



                    </select>











                    <button


                        className="
                        bg-blue-600

                        text-white

                        px-10
                        py-3

                        rounded-lg

                        font-medium

                        transition-all
                        duration-300

                        hover:bg-blue-700
                        "

                    >


                        Search


                    </button>








                </div>








            </div>







        </section>


    );


}