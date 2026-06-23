"use client";


import { useState } from "react";


import Link from "next/link";


import {

    Home,
    Search,
    PlusCircle,
    User,
    Menu,
    X

} from "lucide-react";









export default function MobileNavbar() {



    const [open, setOpen] = useState(false);


    const [fullMenu, setFullMenu] = useState(false);


    const [category, setCategory] = useState("Buy");











    return (


        <>


            {/* TOP BAR */}


            <div className="
            fixed top-0 left-0 right-0
            h-16
            bg-white
            z-50

            px-5

            flex
            items-center
            justify-between

            shadow-sm
            ">



                <Link

                    href="/"

                    className="text-xl font-bold text-blue-600"

                >

                    DreamHome

                </Link>







                <button

                    onClick={() => setOpen(!open)}

                    className="text-black cursor-pointer"

                >


                    {

                        open

                            ?

                            <X size={26} />

                            :

                            <Menu size={26} />

                    }


                </button>




            </div>












            {/* SMALL HAMBURGER DRAWER */}


            {


                open && (


                    <div

                        className="
                        fixed inset-0
                        bg-black/40
                        z-40
                        "

                        onClick={() => setOpen(false)}

                    >




                        <div

                            onClick={(e) => e.stopPropagation()}

                            className="
                            absolute
                            top-16
                            right-0

                            w-[75%]
                            max-w-[320px]

                            h-[calc(100vh-4rem)]

                            bg-white

                            px-6
                            py-8

                            shadow-xl

                            animate-slideLeft
                            "

                        >



                            <div className="flex flex-col gap-6">



                                <MobileMenuItem

                                    href="/"

                                    text="Home"

                                    close={() => setOpen(false)}

                                />




                                <MobileMenuItem

                                    href="/properties/buy"

                                    text="Buy"

                                    close={() => setOpen(false)}

                                />




                                <MobileMenuItem

                                    href="/properties/rent"

                                    text="Rent"

                                    close={() => setOpen(false)}

                                />




                                <MobileMenuItem

                                    href="/dashboard"

                                    text="Dashboard"

                                    close={() => setOpen(false)}

                                />





                                <MobileMenuItem

                                    href="/contact"

                                    text="Contact Us"

                                    close={() => setOpen(false)}

                                />



                            </div>


                        </div>


                    </div>


                )

            }













            {/* FULL PAGE MENU */}



            {


                fullMenu && (


                    <div className="
                    fixed inset-0
                    bg-white
                    z-[100]
                    ">




                        {/* HEADER */}


                        <div className="
                        h-16
                        px-5

                        flex
                        items-center
                        justify-between

                        border-b
                        ">


                            <h2 className="text-xl font-bold text-blue-600">

                                DreamHome

                            </h2>




                            <button

                                onClick={() => setFullMenu(false)}

                                className="cursor-pointer"

                            >


                                <X size={26} />


                            </button>



                        </div>











                        <div className="
                        flex
                        h-[calc(100vh-4rem)]
                        ">





                            {/* LEFT 30% */}


                            <div className="
                            w-[30%]

                            bg-gray-100

                            flex
                            flex-col
                            ">




                                {

                                    ["Buy", "Rent"].map(item => (


                                        <button

                                            key={item}

                                            onClick={() => setCategory(item)}

                                            className={`
                                            py-5
                                            font-bold

                                            ${

                                                category === item

                                                    ?

                                                    "bg-white text-blue-600"

                                                    :

                                                    "text-gray-500"

                                            }

                                            `}

                                        >


                                            {item}


                                        </button>


                                    ))

                                }




                            </div>









                            {/* RIGHT 70% */}



                            <div className="
                            w-[70%]

                            p-6

                            flex
                            flex-col
                            gap-6
                            ">




                                {


                                    category === "Buy"

                                        ?

                                        <>


                                            <FullMenuItem

                                                href="/properties/buy"

                                                text="Buy A Home"

                                                close={() => setFullMenu(false)}

                                            />




                                            <FullMenuItem

                                                href="#"

                                                text="Land / Plot"

                                                close={() => setFullMenu(false)}

                                            />




                                            <FullMenuItem

                                                href="#"

                                                text="Commercial"

                                                close={() => setFullMenu(false)}

                                            />




                                            <FullMenuItem

                                                href="#"

                                                text="Popular Areas"

                                                close={() => setFullMenu(false)}

                                            />



                                        </>


                                        :


                                        <>


                                            <FullMenuItem

                                                href="/properties/rent"

                                                text="Rent A Home"

                                                close={() => setFullMenu(false)}

                                            />



                                            <FullMenuItem

                                                href="#"

                                                text="PG / CO-Living"

                                                close={() => setFullMenu(false)}

                                            />



                                            <FullMenuItem

                                                href="#"

                                                text="Commercial"

                                                close={() => setFullMenu(false)}

                                            />



                                            <FullMenuItem

                                                href="#"

                                                text="Popular Areas"

                                                close={() => setFullMenu(false)}

                                            />



                                        </>

                                }




                            </div>



                        </div>



                    </div>


                )


            }













            {/* BOTTOM NAV */}



            <div className="
            fixed bottom-0 left-0 right-0

            h-16

            bg-white

            z-50

            border-t

            flex
            items-center
            justify-around
            ">



                <BottomItem

                    href="/"

                    text="Home"

                    icon={<Home size={21} />}

                    close={() => {

                        setOpen(false);

                        setFullMenu(false);

                    }}

                />




                <BottomItem

                    href="/#hero-search"

                    text="Search"

                    icon={<Search size={21} />}

                    close={() => {

                        setOpen(false);

                        setFullMenu(false);

                    }}

                />





                <BottomItem

                    href="/add-property"

                    text="Add"

                    icon={<PlusCircle size={23} />}

                    close={() => {

                        setOpen(false);

                        setFullMenu(false);

                    }}

                />






                <BottomItem

                    href="/auth"

                    text="Profile"

                    icon={<User size={21} />}

                    close={() => {

                        setOpen(false);

                        setFullMenu(false);

                    }}

                />





                <button

                    onClick={() => {


                        setOpen(false);

                        setFullMenu(true);


                    }}

                    className="
                    flex
                    flex-col
                    items-center
                    gap-1

                    text-xs
                    text-gray-600
                    "

                >


                    <Menu size={21} />


                    Menu


                </button>





            </div>



        </>


    );


}









function BottomItem({ icon, text, href, close }: any) {


    return (


        <Link

            href={href}

            onClick={close}

            className="
            flex flex-col
            items-center
            gap-1

            text-xs
            text-gray-600
            "

        >


            {icon}


            {text}


        </Link>


    );


}







function MobileMenuItem({ href, text, close }: any) {


    return (


        <Link

            href={href}

            onClick={close}

            className="
            font-semibold
            text-gray-700
            "

        >


            {text}


        </Link>


    );


}








function FullMenuItem({ href, text, close }: any) {


    return (


        <Link

            href={href}

            onClick={close}

            className="
            font-semibold
            text-gray-700

            hover:text-blue-600

            transition
            "

        >


            {text}


        </Link>


    );


}