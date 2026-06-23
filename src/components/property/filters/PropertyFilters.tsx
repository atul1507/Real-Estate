import { SlidersHorizontal } from "lucide-react";


export default function PropertyFilter({

    mode

}: {

    mode: string

}) {


    return (


        <div className="overflow-y-auto hide-scrollbar min-h-0">



            <div className="min-h-full bg-gradient-to-br from-blue-700 to-blue-950 rounded-[2rem] p-6">







                {/* HEADER */}


                <div className="flex items-center gap-3 mb-8">


                    <SlidersHorizontal className="text-orange-300" size={28} />


                    <h3 className="text-2xl font-bold text-white">

                        Filters

                    </h3>


                </div>









                {/* SORT */}


                <div className="mb-8">


                    <h4 className="font-bold mb-3 text-white">

                        Sort By

                    </h4>



                    <select className="w-full rounded-xl p-3 outline-none bg-white/15 text-white border border-white/30 cursor-pointer">


                        <option className="text-black">

                            Nearest First

                        </option>


                        <option className="text-black">

                            Price Low To High

                        </option>


                        <option className="text-black">

                            Price High To Low

                        </option>


                    </select>



                </div>









                {/* PRICE FILTER */}


                <div className="mb-8">


                    <h4 className="font-bold mb-3 text-white">


                        {

                            mode === "buy"

                                ?

                                "Budget"

                                :

                                "Monthly Rent"

                        }


                    </h4>








                    <div className="space-y-3 text-blue-100">


                        {

                            mode === "buy"

                                ?

                                <>


                                    <p className="cursor-pointer hover:text-orange-200 transition">

                                        ₹10L - ₹50L

                                    </p>


                                    <p className="cursor-pointer hover:text-orange-200 transition">

                                        ₹50L - ₹1Cr

                                    </p>


                                    <p className="cursor-pointer hover:text-orange-200 transition">

                                        Above ₹1Cr

                                    </p>


                                </>


                                :


                                <>


                                    <p className="cursor-pointer hover:text-orange-200 transition">

                                        ₹5K - ₹15K/month

                                    </p>


                                    <p className="cursor-pointer hover:text-orange-200 transition">

                                        ₹15K - ₹50K/month

                                    </p>


                                    <p className="cursor-pointer hover:text-orange-200 transition">

                                        Above ₹50K/month

                                    </p>


                                </>


                        }


                    </div>


                </div>









                {/* PROPERTY TYPE */}


                <div className="mb-8">


                    <h4 className="font-bold mb-3 text-white">

                        Property Type

                    </h4>




                    <div className="space-y-3 text-blue-100">


                        <p className="cursor-pointer hover:text-orange-200 transition">

                            Apartment

                        </p>


                        <p className="cursor-pointer hover:text-orange-200 transition">

                            Villa

                        </p>


                        <p className="cursor-pointer hover:text-orange-200 transition">

                            Independent House

                        </p>


                    </div>


                </div>










                {/* AMENITIES */}


                <div>


                    <h4 className="font-bold mb-3 text-white">

                        Amenities

                    </h4>



                    <div className="space-y-3 text-blue-100">


                        <p>Parking</p>

                        <p>Garden</p>

                        <p>Security</p>

                        <p>Swimming Pool</p>

                        <p>Gym</p>

                        <p>Power Backup</p>


                    </div>



                </div>






            </div>


        </div>


    );


}