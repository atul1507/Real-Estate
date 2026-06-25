import AnimatedPropertyCard from "./AnimatedPropertyCard";

import { properties } from "@/components/property/data/PropertyData";





export default function PropertyRoad() {


    const premiumProperties = properties.filter((property) => property.type === "buy" && property.premium);


    if (premiumProperties.length === 0) {

        return null;

    }


    const desktopHeight = 350 + premiumProperties.length * 340;

    const mobileHeight = 350 + premiumProperties.length * 520;



    return (


        <section

            style={{

                "--mobile-height": `${mobileHeight}px`,

                "--desktop-height": `${desktopHeight}px`

            } as React.CSSProperties}


            className="relative min-h-[var(--mobile-height)] lg:min-h-[var(--desktop-height)] pb-20 overflow-hidden"

        >







            {/* BOARD */}


            <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-[20%] md:-translate-x-[40%] lg:left-1/2 lg:-translate-x-1/2 w-[85%] md:w-[420px] lg:w-[520px] h-24 md:h-28 bg-white rounded-2xl shadow-xl flex items-center justify-center z-20">


                <h2 className="text-xl md:text-2xl font-bold">


                    Premium Properties


                </h2>


            </div>










            {/* ROAD */}


            <div style={{ height: "calc(100% - 100px)" }} className="absolute top-24 md:top-28 left-1/2 -translate-x-1/2 md:left-[20%] lg:left-1/2 w-20 md:w-28 lg:w-36 bg-gray-900 overflow-hidden">



                <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-[repeating-linear-gradient(to_bottom,#fff_0px,#fff_45px,transparent_45px,transparent_110px)]" />



            </div>









            {

                premiumProperties.map((property, index) => {


                    const desktopLeft = index % 2 === 0;





                    return (


                        <div


                            key={property.id}


                            style={{

                                top: `calc(280px + ${index} * var(--card-gap))`

                            } as React.CSSProperties}


                            className={`
                            absolute z-30
                            [--card-gap:520px]
                            lg:[--card-gap:320px]

                            left-1/2
                            -translate-x-1/2

                            md:left-[35%]
                            md:translate-x-0

                            ${desktopLeft ? "lg:right-[62%] lg:left-auto" : "lg:left-[62%]"}
                            `}


                        >







                            {/* CONNECTOR */}


                            <div

                                className={`
                                hidden md:block
                                absolute top-1/2
                                h-[2px]
                                bg-gray-300
                                md:w-28
                                md:-left-28
                                lg:w-40

                                ${desktopLeft ? "lg:-right-40 lg:left-auto" : "lg:-left-40"}
                                `}

                            />










                            {/* DOT */}


                            <div

                                className={`
                                hidden md:block
                                absolute top-1/2
                                -translate-y-1/2

                                w-4 h-4
                                rounded-full
                                bg-blue-600
                                border-4
                                border-white
                                shadow-lg

                                md:-left-[120px]

                                ${desktopLeft ? "lg:-right-[168px] lg:left-auto" : "lg:-left-[168px]"}
                                `}

                            />











                            <AnimatedPropertyCard

                                property={property}

                                mobileDirection={index % 2 === 0 ? "left" : "right"}

                                desktopDirection={desktopLeft ? "left" : "right"}

                            />









                        </div>


                    )


                })

            }







        </section>


    )


}