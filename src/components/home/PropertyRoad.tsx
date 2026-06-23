import AnimatedPropertyCard from "./AnimatedPropertyCard";





export default function PropertyRoad() {



    const properties = Array.from({ length: 10 });





    return (


        <section
            className="
    relative

    min-h-[5600px]
    lg:min-h-[3600px]

    pb-72

    overflow-hidden"
        >







            {/* BOARD */}

            <div
                className="
    absolute

    top-0


    /* MOBILE */
    left-1/2
    -translate-x-1/2


    /* TABLET */
    md:left-[20%]
    md:-translate-x-[40%]


    /* DESKTOP */
    lg:left-1/2
    lg:-translate-x-1/2



    w-[85%]

    md:w-[420px]

    lg:w-[520px]



    h-24
    md:h-28



    bg-white


    rounded-2xl


    shadow-xl



    flex
    items-center
    justify-center



    z-20
    "
            >


                <h2
                    className="
        text-xl
        md:text-2xl

        font-bold
        "
                >

                    Featured Properties

                </h2>


            </div>









            {/* ROAD */}


            <div
                className="
                absolute

                top-24
                md:top-28

                left-1/2
                -translate-x-1/2


                md:left-[20%]


                lg:left-1/2


                w-20
                md:w-28
                lg:w-36


                bottom-0

                bg-gray-900

                overflow-hidden
                "
            >



                <div
                    className="
                    absolute

                    left-1/2
                    -translate-x-1/2

                    w-1
                    h-full

                    bg-[repeating-linear-gradient(to_bottom,#fff_0px,#fff_45px,transparent_45px,transparent_110px)]
                    "
                />



            </div>










            {
                properties.map((_, index) => {


                    const desktopLeft = index % 2 === 0;


                    const mobileLeftAnimation = index % 2 === 0;





                    return (



                        <div


                            key={index}


                            style={{

                                top: `calc(280px + ${index} * var(--card-gap))`

                            } as React.CSSProperties}



                            className={`
                            
                            absolute

                            z-30


                            [--card-gap:520px]

                            lg:[--card-gap:320px]



                            left-1/2
                            -translate-x-1/2



                            md:left-[35%]
                            md:translate-x-0



                            ${desktopLeft

                                    ?

                                    "lg:right-[62%] lg:left-auto"

                                    :

                                    "lg:left-[62%]"

                                }


                            `}
                        >







                            {/* CONNECTOR */}


                            <div
                                className={`
                                
                                hidden
                                md:block

                                absolute

                                top-1/2

                                h-[2px]

                                bg-gray-300


                                md:w-28
                                md:-left-28



                                lg:w-40


                                ${desktopLeft

                                        ?

                                        "lg:-right-40 lg:left-auto"

                                        :

                                        "lg:-left-40"

                                    }

                                `}
                            />









                            {/* DOT */}


                            <div
                                className={`
                                
                                hidden
                                md:block


                                absolute

                                top-1/2
                                -translate-y-1/2


                                w-4
                                h-4


                                rounded-full


                                bg-blue-600


                                border-4
                                border-white


                                shadow-lg



                                md:-left-[120px]



                                ${desktopLeft

                                        ?

                                        "lg:-right-[168px] lg:left-auto"

                                        :

                                        "lg:-left-[168px]"

                                    }

                                `}
                            />










                            <AnimatedPropertyCard


                                mobileDirection={

                                    index % 2 === 0

                                        ?

                                        "left"

                                        :

                                        "right"

                                }


                                desktopDirection={

                                    desktopLeft

                                        ?

                                        "left"

                                        :

                                        "right"

                                }


                            />








                        </div>



                    )


                })
            }







        </section>


    )


}