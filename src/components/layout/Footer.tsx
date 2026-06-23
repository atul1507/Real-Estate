import {

    Home,
    Mail,
    Phone,
    MapPin,
    Send,
    Share2,
    MessageCircle

} from "lucide-react";







export default function Footer() {


    return (

        <footer

            className="

relative

bg-black

text-white


pt-20

pb-8


overflow-hidden

"

        >






            {/* BLUE GLOW */}


            <div

                className="

absolute

-top-32

left-1/2

-translate-x-1/2


w-[500px]

h-[300px]


bg-blue-600/20


blur-[120px]


rounded-full

"

            />










            <div

                className="

relative

z-10


max-w-7xl

mx-auto


px-6


grid

grid-cols-1

md:grid-cols-4


gap-14

"

            >










                {/* BRAND */}



                <div>



                    <div

                        className="

flex

items-center

gap-3

mb-5

"

                    >



                        <div

                            className="

w-12

h-12


rounded-full


bg-blue-600


flex

items-center

justify-center

"

                        >


                            <Home size={26} />


                        </div>





                        <h2

                            className="

text-3xl

font-bold

"

                        >

                            DreamHome

                        </h2>




                    </div>






                    <p

                        className="

text-gray-400

leading-7

"

                    >

                        Helping families discover verified homes
                        with trusted agents and secure deals.

                    </p>




                </div>











                {/* EXPLORE */}



                <div>


                    <h3

                        className="

font-bold

text-lg

mb-5

"

                    >

                        Explore

                    </h3>




                    <ul

                        className="

space-y-3

text-gray-400

"

                    >



                        <li className="hover:text-white transition cursor-pointer">

                            Buy Property

                        </li>



                        <li className="hover:text-white transition cursor-pointer">

                            Sell Property

                        </li>




                        <li className="hover:text-white transition cursor-pointer">

                            Rent Home

                        </li>




                        <li className="hover:text-white transition cursor-pointer">

                            Featured Homes

                        </li>



                    </ul>



                </div>












                {/* COMPANY */}



                <div>


                    <h3

                        className="

font-bold

text-lg

mb-5

"

                    >

                        Company

                    </h3>





                    <ul

                        className="

space-y-3

text-gray-400

"

                    >



                        <li className="hover:text-white transition cursor-pointer">

                            About Us

                        </li>



                        <li className="hover:text-white transition cursor-pointer">

                            Our Agents

                        </li>




                        <li className="hover:text-white transition cursor-pointer">

                            Customer Stories

                        </li>



                        <li className="hover:text-white transition cursor-pointer">

                            Contact

                        </li>



                    </ul>




                </div>












                {/* CONTACT */}



                <div>


                    <h3

                        className="

font-bold

text-lg

mb-5

"

                    >

                        Contact Us

                    </h3>







                    <div

                        className="

space-y-4

text-gray-400

"

                    >



                        <p

                            className="

flex

items-center

gap-3

"

                        >

                            <Mail size={20} />


                            support@dreamhome.com


                        </p>






                        <p

                            className="

flex

items-center

gap-3

"

                        >


                            <Phone size={20} />


                            +91 98765 43210


                        </p>







                        <p

                            className="

flex

items-center

gap-3

"

                        >


                            <MapPin size={20} />


                            India


                        </p>





                    </div>











                    {/* SOCIAL ICONS */}


                    <div

                        className="

flex

gap-4

mt-8

"

                    >



                        {


                            [Share2, MessageCircle, Send].map(

                                (Icon, index) => (



                                    <div


                                        key={index}



                                        className="

w-10

h-10


rounded-full


bg-white/10



flex

items-center

justify-center



hover:bg-blue-600


hover:-translate-y-1



transition-all



cursor-pointer

"

                                    >


                                        <Icon size={18} />


                                    </div>



                                )

                            )

                        }



                    </div>





                </div>






            </div>









            {/* COPYRIGHT */}


            <div

                className="

relative

z-10


max-w-7xl

mx-auto



mt-8

pt-4



border-t

border-white/10



text-center


text-gray-500

text-sm

"

            >


                © 2026 DreamHome. All rights reserved.



            </div>






        </footer>

    );


}