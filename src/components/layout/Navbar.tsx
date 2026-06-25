"use client";


import Link from "next/link";

import {

    Plus,
    User,
    Search

} from "lucide-react";


import {

    useEffect,
    useState

} from "react";


import {

    usePathname

} from "next/navigation";


import MobileNavbar from "./MobileNavbar";








export default function Navbar() {



    const [showSearch, setShowSearch] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    const [isReady, setIsReady] = useState(false);

    const [buyOpen, setBuyOpen] = useState(false);



    const pathname = usePathname();


    const hideSearch = pathname !== "/";









    // SCROLL COLOR CHANGE

    useEffect(() => {


        const handleScroll = () => {


            setIsScrolled(

                window.scrollY > 20

            );


        };



        handleScroll();



        window.addEventListener(

            "scroll",

            handleScroll,

            { passive: true }

        );



        return () => {

            window.removeEventListener(

                "scroll",

                handleScroll

            );

        };


    }, []);












    // HERO SEARCH OBSERVER SAME OLD LOGIC


    useEffect(() => {



        let observer: IntersectionObserver | null = null;

        let checkSearchPosition: (() => void) | null = null;




        if (pathname !== "/") {


            setShowSearch(false);

            return;

        }




        const timer = setTimeout(() => {



            const heroSearch =

                document.getElementById(

                    "hero-search"

                );




            if (!heroSearch) {


                setShowSearch(false);

                return;

            }




            checkSearchPosition = () => {


                const rect =

                    heroSearch.getBoundingClientRect();



                setShowSearch(

                    rect.top < 80

                );


            };





            checkSearchPosition();




            setTimeout(() => {


                setIsReady(true);


            }, 50);





            observer = new IntersectionObserver(


                () => {

                    checkSearchPosition?.();

                },


                {

                    threshold: [0, 0.7, 1]

                }

            );



            observer.observe(heroSearch);




            window.addEventListener(

                "scroll",

                checkSearchPosition,

                { passive: true }

            );




        }, 100);





        return () => {


            clearTimeout(timer);


            observer?.disconnect();



            if (checkSearchPosition) {


                window.removeEventListener(

                    "scroll",

                    checkSearchPosition

                );


            }


        };



    }, [pathname]);













    return (

        <>



            {/* DESKTOP NAVBAR */}

            <header

                className={`
hidden xl:flex
fixed top-0 left-0 right-0
h-16
z-50

px-12

items-center

transition-colors duration-300


${isScrolled

                        ?

                        "bg-white shadow-sm"

                        :

                        "bg-transparent"

                    }

`}

            >







                {/* LOGO */}

                <div

                    className={`
overflow-hidden
transition-all duration-500


${showSearch

                            ?

                            "xl:w-[10%]"

                            :

                            "xl:w-[10%]"

                        }

`}

                >


                    <Link

                        href="/"

                        className={`

text-xl
font-bold

${isScrolled

                                ?

                                "text-black"

                                :

                                "text-white"

                            }

`}

                    >

                        DreamHome

                    </Link>


                </div>









                {/* SEARCH */}

                <div

                    className={`
flex justify-center
transition-all duration-500


${showSearch

                            ?

                            "xl:w-[30%]"

                            :

                            "xl:w-[30%]"

                        }

`}

                >


                    {

                        !hideSearch &&


                        <div

                            className={`
flex items-center

border
border-gray-300

rounded-full

px-4 py-2

w-full max-w-105


${isReady && "transition-opacity duration-500"}


${showSearch

                                    ?

                                    "opacity-100"

                                    :

                                    "opacity-0 pointer-events-none"

                                }


`}

                        >



                            <input

                                placeholder="Search Location"

                                className="flex-1 outline-none text-sm"

                            />



                            <Search

                                size={20}

                                className="text-blue-600"

                            />



                        </div>


                    }



                </div>










                {/* NAVIGATION */}

                <div

                    className="xl:w-[35%] flex items-center justify-around"

                >



                    <Link

                        href="/"

                        className={`${isScrolled ? "text-black" : "text-white"} font-medium`}

                    >

                        Home

                    </Link>









                    {/* BUY RENT MEGA MENU */}

                    <div

                        className="relative"

                        onMouseEnter={() => setBuyOpen(true)}

                        onMouseLeave={() => setBuyOpen(false)}

                    >


                        <button

                            className={`${isScrolled ? "text-black" : "text-white"} font-medium`}

                        >

                            Buy/Rent

                        </button>





                        {

                            buyOpen && (


                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5">



                                    <div className="w-[520px] bg-white rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-8 text-black animate-fadeIn">







                                        {/* BUYERS */}


                                        <div>


                                            <h3 className="font-bold mb-4">

                                                For Buyers

                                            </h3>




                                            <div className="space-y-3 text-sm flex flex-col">


                                                <Link

                                                    href="/properties/buy"

                                                    className="hover:text-blue-600 transition"

                                                >

                                                    Buy A Home

                                                </Link>



                                                <span className="hover:text-blue-600 cursor-pointer transition">

                                                    Land / Plot

                                                </span>



                                                <span className="hover:text-blue-600 cursor-pointer transition">

                                                    Commercial

                                                </span>



                                                <span className="hover:text-blue-600 cursor-pointer transition">

                                                    Popular Areas

                                                </span>



                                            </div>



                                        </div>









                                        {/* TENANTS */}


                                        <div>



                                            <h3 className="font-bold mb-4">

                                                For Tenants

                                            </h3>





                                            <div className="space-y-3 text-sm flex flex-col">



                                                <Link

                                                    href="/properties/rent"

                                                    className="hover:text-blue-600 transition"

                                                >

                                                    Rent A Home

                                                </Link>




                                                <span className="hover:text-blue-600 cursor-pointer transition">

                                                    PG / CO-Living

                                                </span>




                                                <span className="hover:text-blue-600 cursor-pointer transition">

                                                    Commercial

                                                </span>




                                                <span className="hover:text-blue-600 cursor-pointer transition">

                                                    Popular Areas

                                                </span>




                                            </div>




                                        </div>






                                    </div>



                                </div>


                            )

                        }


                    </div>








                    <Link

                        href="/contact"

                        className={`${isScrolled ? "text-black" : "text-white"} font-medium`}

                    >

                        Contact Us

                    </Link>




                    <Link

                        href="/dashboard"

                        className={`${isScrolled ? "text-black" : "text-white"} font-medium`}

                    >

                        Dashboard

                    </Link>



                </div>











                {/* ACTIONS SAME */}

                <div className="xl:w-[25%] flex justify-around">



                    <Link

                        href="/add-property"

                        className={`

px-5 py-2

rounded-full

border

transition-all


${isScrolled

                                ?

                                "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"

                                :

                                "border-white text-white hover:bg-white hover:text-blue-600"

                            }

`}

                    >

                        Add Property

                    </Link>






                    <Link

                        href="/auth"

                        className={`

px-5 py-2

rounded-full

transition-all


${isScrolled

                                ?

                                "bg-blue-600 text-white hover:bg-white hover:text-blue-600"

                                :

                                "bg-white text-blue-600 hover:bg-transparent hover:text-white"

                            }

`}

                    >

                        Login

                    </Link>



                </div>



            </header>








            {/* MOBILE / TABLET */}

            <div className="xl:hidden">

                <MobileNavbar />

            </div>





        </>

    );


}