"use client";


import { useState } from "react";

import {

    Mail,
    MapPin,
    Phone,
    Check

} from "lucide-react";





export default function ContactSection() {


    const [sent, setSent] = useState(false);




    const handleSend = () => {


        setSent(true);


        setTimeout(() => {

            setSent(false);

        }, 3000);


    };








    return (


        <section className="min-h-screen bg-slate-900 px-6 py-20">





            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">








                {/* LEFT DETAILS */}


                <div>





                    <h1 className="mb-10 text-6xl font-bold text-orange-200 drop-shadow-[0_0_25px_#fed7aa]">


                        Contact Us


                    </h1>







                    <h2 className="text-3xl font-bold text-white mb-5">


                        Get In Touch With DreamHome


                    </h2>






                    <p className="text-gray-300 text-lg mb-10 max-w-lg">


                        Have questions about buying, renting or listing your property?
                        Our team is ready to help you find your dream home.


                    </p>









                    <div className="space-y-6">








                        <div className="flex items-center gap-5">


                            <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">


                                <MapPin className="text-orange-200" />


                            </div>



                            <div>


                                <h3 className="font-bold text-white">

                                    Location

                                </h3>


                                <p className="text-gray-300">

                                    Varanasi, India

                                </p>


                            </div>


                        </div>









                        <div className="flex items-center gap-5">


                            <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">


                                <Mail className="text-orange-200" />


                            </div>



                            <div>


                                <h3 className="font-bold text-white">

                                    Email

                                </h3>


                                <p className="text-gray-300">

                                    support@dreamhome.com

                                </p>


                            </div>


                        </div>











                        <div className="flex items-center gap-5">


                            <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">


                                <Phone className="text-orange-200" />


                            </div>



                            <div>


                                <h3 className="font-bold text-white">

                                    Phone

                                </h3>


                                <p className="text-gray-300">

                                    +91 98765 43210

                                </p>


                            </div>


                        </div>







                    </div>






                </div>













                {/* RIGHT SIDE */}


                <div className="relative">







                    {/* FORM */}


                    <div className="bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 p-8">



                        <div className="space-y-5">





                            <input

                                placeholder="Your Name"

                                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white outline-none placeholder:text-gray-400 transition-all duration-300 focus:bg-white/20 focus:border-orange-200 focus:shadow-[0_0_25px_rgba(254,215,170,0.6)] focus:scale-[1.02]"

                            />







                            <input

                                placeholder="Email Address"

                                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white outline-none placeholder:text-gray-400 transition-all duration-300 focus:bg-white/20 focus:border-orange-200 focus:shadow-[0_0_25px_rgba(254,215,170,0.6)] focus:scale-[1.02]"

                            />








                            <input

                                placeholder="Phone Number"

                                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white outline-none placeholder:text-gray-400 transition-all duration-300 focus:bg-white/20 focus:border-orange-200 focus:shadow-[0_0_25px_rgba(254,215,170,0.6)] focus:scale-[1.02]"

                            />









                            <textarea

                                rows={5}

                                placeholder="Your Message"

                                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white outline-none placeholder:text-gray-400 resize-none transition-all duration-300 focus:bg-white/20 focus:border-orange-200 focus:shadow-[0_0_25px_rgba(254,215,170,0.6)] focus:scale-[1.02]"

                            />









                            <button

                                onClick={handleSend}

                                className="w-full py-4 rounded-full bg-orange-200 text-black font-bold hover:bg-white transition cursor-pointer"

                            >


                                Send Message


                            </button>





                        </div>



                    </div>









                    {/* SUCCESS TOAST */}


                    {


                        sent && (


                            <div className="absolute left-0 right-0 mt-8 flex justify-center">



                                {/* INVISIBLE WALL FOR REVEAL */}

                                <div className="overflow-hidden rounded-full">





                                    {/* CAPSULE */}

                                    <div className="relative animate-[revealUp_0.25s_ease-out] flex items-center gap-4 px-8 py-4 rounded-full bg-green-500/20 border border-green-400/40">





                                        {/* SOFT ROUND GLOW */}

                                        <div className="absolute inset-0 rounded-full bg-green-500/20 blur-xl -z-10" />








                                        {/* CHECK ICON */}

                                        <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center">


                                            <Check

                                                size={22}

                                                className="text-white"

                                            />


                                        </div>









                                        {/* TEXT */}

                                        <span className="text-green-300 font-bold text-lg">


                                            Message Sent


                                        </span>






                                    </div>





                                </div>




                            </div>


                        )


                    }







                </div>








            </div>






        </section>


    );


}