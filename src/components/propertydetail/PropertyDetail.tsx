"use client";


import {

    useEffect,
    useRef,
    useState

} from "react";


import { properties } from "@/components/property/data/PropertyData";

import PropertyHeroInfo from "./PropertyHeroInfo";

import OverviewSection from "./sections/OverviewSection";
import OwnerDetailSection from "./sections/OwnerDetailSection";







export default function PropertyDetail({

    id

}: {

    id: string

}) {




    const [activeSection, setActiveSection] = useState("Overview");



    const sectionRefs = useRef<{

        [key: string]: HTMLElement | null

    }>({});








    const property = properties.find(

        (item) => String(item.id) === String(id)

    );








    useEffect(() => {


        const observer = new IntersectionObserver(


            (entries) => {


                entries.forEach((entry) => {


                    if (entry.isIntersecting) {


                        setActiveSection(

                            entry.target.id

                        );


                    }


                });


            },


            {


                threshold: 0,


                rootMargin: "-45% 0px -45% 0px"


            }


        );






        Object.values(sectionRefs.current).forEach(

            (section: any) => {


                if (section) {


                    observer.observe(section);


                }


            }

        );






        return () => {


            observer.disconnect();


        };



    }, []);











    const scrollToSection = (section: string) => {


        const element = sectionRefs.current[section];


        if (element) {


            const y =

                element.getBoundingClientRect().top +

                window.scrollY -

                360;



            window.scrollTo({

                top: y,

                behavior: "smooth"

            });


        }


    };










    if (!property) {


        return (


            <div className="bg-slate-900 min-h-screen text-white">


                Property Not Found


            </div>


        );


    }











    return (


        <div className="bg-slate-900 min-h-screen">






            <PropertyHeroInfo

                property={property}

                activeSection={activeSection}

                setActiveSection={setActiveSection}

                scrollToSection={scrollToSection}

            />









            {/* PAGE CONTENT */}


            <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 space-y-20">









                {


                    [

                        "Overview",

                        "Owner Detail",

                        "Explore Locality",

                        "Similar Properties",

                        "Customer Feedback"


                    ].map((section) => (






                        <section


                            key={section}


                            id={section}


                            ref={(element) => {


                                sectionRefs.current[section] = element;


                            }}


                            className="scroll-mt-[330px]"


                        >








                            {


                                section === "Overview" && (


                                    <OverviewSection

                                        property={property}

                                    />


                                )


                            }









                            {


                                section === "Owner Detail" && (


                                    <OwnerDetailSection

                                        property={property}

                                    />


                                )


                            }









                            {


                                section === "Explore Locality" && (


                                    <>


                                        <h2 className="text-4xl font-bold text-orange-200 mb-6">


                                            Explore Locality


                                        </h2>


                                        <p className="text-gray-300">


                                            Locality information coming soon


                                        </p>


                                    </>


                                )


                            }










                            {


                                section === "Similar Properties" && (


                                    <>


                                        <h2 className="text-4xl font-bold text-orange-200 mb-6">


                                            Similar Properties


                                        </h2>


                                        <p className="text-gray-300">


                                            Similar properties coming soon


                                        </p>


                                    </>


                                )


                            }










                            {


                                section === "Customer Feedback" && (


                                    <>


                                        <h2 className="text-4xl font-bold text-orange-200 mb-6">


                                            Customer Feedback


                                        </h2>


                                        <p className="text-gray-300">


                                            Customer reviews coming soon


                                        </p>


                                    </>


                                )


                            }








                        </section>






                    ))


                }









            </div>






        </div>


    );


}