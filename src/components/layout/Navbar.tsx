"use client";

import Link from "next/link";
import { Menu, X, Plus, User, Search } from "lucide-react";
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

export default function Navbar() {


    const [showSearch, setShowSearch] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const pathname = usePathname();
    const hideSearch = pathname !== "/";


    // Navbar background change

    // Navbar background change

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









    // Hero search visibility observer


    useEffect(() => {


        let observer: IntersectionObserver | null = null;


        let checkSearchPosition: (() => void) | null = null;






        // IF NOT HOME PAGE RESET SEARCH


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










            observer =
                new IntersectionObserver(


                    () => {


                        checkSearchPosition?.();


                    },


                    {

                        threshold: [0, 0.7, 1]

                    }


                );








            observer.observe(

                heroSearch

            );








            window.addEventListener(

                "scroll",

                checkSearchPosition,

                { passive: true }

            );





        }, 100);









        return () => {



            clearTimeout(timer);





            if (observer) {


                observer.disconnect();


            }






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

            {/* MAIN NAVBAR */}
            <header
                className={`fixed top-0 left-0 right-0 h-16 z-50 px-4 lg:px-12 flex items-center transition-colors duration-300
                    ${isScrolled
                        ?
                        "bg-white shadow-sm"
                        :
                        "bg-transparent"
                    }
                `}
            >


                {/* SECTION 1 : LOGO */}

                <div
                    className={`overflow-hidden transition-all duration-500
                        ${showSearch
                            ?
                            "w-0 xl:w-[10%]"
                            :
                            "w-[30%] md:w-[15%] xl:w-[10%]"
                        }
                    `}
                >

                    <Link
                        href="/"
                        className={`text-base md:text-xl font-bold whitespace-nowrap transition-colors duration-300 ${isScrolled
                            ?
                            "text-black"
                            :
                            "text-white"
                            }`}
                    >

                        DreamHome

                    </Link>

                </div>


                {/* SECTION 2 : SEARCH */}



                <div
                    className={`flex justify-center transition-all duration-500 ${showSearch
                        ?
                        "w-[70%] md:w-[55%] xl:w-[30%]"
                        :
                        "w-[40%] md:w-[40%] xl:w-[30%]"
                        }`}
                >

                    {

                        !hideSearch && (

                            <div
                                className={`flex items-center border border-gray-300 rounded-full px-4 py-2 w-full max-w-105 focus-within:border-blue-600 transition-colors duration-300
                            ${isReady ? "transition-opacity duration-500 ease-in-out" : ""}
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


                                <button className="text-blue-600">

                                    <Search size={20} />

                                </button>


                            </div>


                        )

                    }


                </div>

                {/* SECTION 3 : NAVIGATION */}

                <div className="hidden xl:flex xl:w-[35%] items-center justify-around">


                    <Link
                        href="/"
                        className={`font-medium hover:[text-shadow:0_0_0.8px_currentColor] transition-all duration-300
                            ${isScrolled
                                ?
                                "text-black"
                                :
                                "text-white"
                            }
                        `}
                    >


                        Home


                    </Link>


                    <Link
                        href="/properties"
                        className={`font-medium hover:[text-shadow:0_0_0.8px_currentColor] transition-all duration-300
                            ${isScrolled
                                ?
                                "text-black"
                                :
                                "text-white"
                            }
                        `}
                    >

                        Buy/Rent

                    </Link>


                    <Link
                        href="/contact"
                        className={`font-medium hover:[text-shadow:0_0_0.8px_currentColor] transition-all duration-300
                            ${isScrolled
                                ?
                                "text-black"
                                :
                                "text-white"
                            }
                        `}
                    >

                        Contact Us

                    </Link>


                    <Link
                        href="/dashboard"
                        className={`font-medium hover:[text-shadow:0_0_0.8px_currentColor] transition-all duration-300
                            ${isScrolled
                                ?
                                "text-black"
                                :
                                "text-white"
                            }
                        `}
                    >

                        Dashboard

                    </Link>


                </div>




                {/* SECTION 4 : ACTIONS */}

                <div className="w-[30%] md:w-[45%] xl:w-[25%] flex items-center justify-around">


                    <Link
                        href="/add-property"
                        className={`w-9 h-9 md:w-auto md:h-auto md:px-5 md:py-2 rounded-full flex items-center justify-center font-medium border transition-all duration-300
                            ${isScrolled
                                ?
                                "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                                :
                                "border-white text-white hover:bg-white hover:text-blue-600"
                            }
                        `}
                    >


                        <span className="hidden md:block">

                            Add Property

                        </span>


                        <Plus
                            size={18}
                            className="md:hidden"
                        />


                    </Link>



                    <Link
                        href="/auth"
                        className={`w-9 h-9 md:w-auto md:h-auto md:px-5 md:py-2 rounded-full flex items-center justify-center font-medium border transition-all duration-300 ${isScrolled
                            ?
                            "bg-blue-600 border-blue-600 text-white hover:bg-white hover:text-blue-600"
                            :
                            "bg-white border-white text-blue-600 hover:bg-transparent hover:text-white"
                            }`}
                    >


                        <span className="hidden md:block">

                            Login

                        </span>


                        <User
                            size={18}
                            className="md:hidden"
                        />


                    </Link>

                    <button

                        onClick={() => setMenuOpen(!menuOpen)}

                        className={`

        xl:hidden

        transition-colors

        duration-300

        cursor-pointer


        ${isScrolled

                                ?

                                "text-black"

                                :

                                "text-white"

                            }

    `}

                    >


                        {

                            menuOpen

                                ?

                                <X size={28} />

                                :

                                <Menu size={28} />

                        }


                    </button>


                </div>


            </header>

            {/* MOBILE MENU DROPDOWN */}
            {menuOpen && (

                <div className="fixed top-16 left-0 w-full bg-white shadow-lg z-40 xl:hidden">


                    <nav className="flex flex-col gap-1 p-6">


                        <Link
                            href="/"
                            className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium rounded-lg"
                            onClick={() => setMenuOpen(false)}
                        >

                            Home

                        </Link>



                        <Link
                            href="/properties"
                            className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium rounded-lg"
                            onClick={() => setMenuOpen(false)}
                        >

                            Buy

                        </Link>



                        <Link
                            href="/properties"
                            className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium rounded-lg"
                            onClick={() => setMenuOpen(false)}
                        >

                            Rent

                        </Link>



                        <Link
                            href="/dashboard"
                            className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium rounded-lg"
                            onClick={() => setMenuOpen(false)}
                        >

                            Dashboard

                        </Link>


                    </nav>


                </div>

            )}
        </>
    );
}