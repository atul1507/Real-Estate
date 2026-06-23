import PropertyRoad from "./PropertyRoad";



export default function FeaturedProperties() {


    return (


        <section
            className="
            overflow-hidden

            bg-gradient-to-b

from-blue-200

via-sky-50

to-orange-200
            "
        >




            {/* TOP TEXT */}


            <div
                className="
                text-center

                pt-32
                pb-24

                px-5
                "
            >


                <h1
                    className="
                    text-5xl
                    md:text-7xl

                    font-bold

                    tracking-wide

                    text-gray-900
                    "
                >

                    Explore Premium Homes

                </h1>



                <p
                    className="
                    mt-8

                    text-lg
                    md:text-xl

                    text-gray-600
                    "
                >

                    Discover properties on your journey

                </p>



            </div>




            <PropertyRoad />




        </section>


    )

}