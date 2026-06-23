import ActionCard from "./ActionCard";


import {

    Home,

    CircleDollarSign,

    KeyRound

} from "lucide-react";






export default function PropertyActions() {



    return (


        <section
            className="

    relative

    z-20

    bg-white


    pt-32

    pb-16

    "
        >



            {/* HEADING */}


            <div

                className="
            text-center

            mb-24

            px-5
            "
            >


                <h2

                    className="
                text-4xl

                md:text-6xl

                font-bold

                text-gray-900
                "
                >

                    How We Can Help You

                </h2>



                <p

                    className="
                mt-5

                text-gray-500

                text-base

                md:text-lg
                "
                >

                    Explore our services to buy, sell and rent properties easily

                </p>


            </div>










            {/* CARDS */}


            <div

                className="
            max-w-7xl

            mx-auto

            grid

            grid-cols-1

            md:grid-cols-2

            lg:grid-cols-3


            gap-20
            "
            >



                <ActionCard

                    icon={

                        <Home

                            size={140}

                            strokeWidth={1.5}

                        />

                    }


                    title="Buy a property"


                    description="
                Find your dream home with verified
                listings and premium properties.
                "


                    button="Find a home"


                    delay={0}

                />







                <ActionCard

                    icon={

                        <CircleDollarSign

                            size={140}

                            strokeWidth={1.5}

                        />

                    }


                    title="Sell a property"


                    description="
                List your property easily and connect
                with genuine buyers.
                "


                    button="Place an ad"


                    delay={.2}

                />







                <div
                    className="
    md:col-span-2

    lg:col-span-1

    flex

    justify-center
    "
                >


                    <ActionCard


                        icon={

                            <KeyRound

                                size={140}

                                strokeWidth={1.5}

                            />

                        }


                        title="Rent a property"


                        description="
        Explore rental homes and find the
        perfect place for your lifestyle.
        "


                        button="Find a rental"


                        delay={.4}


                    />


                </div>



            </div>


        </section>


    )


}