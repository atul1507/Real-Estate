"use client";


import {

    useState

} from "react";


import {

    CheckCircle,
    Phone,
    Send,
    User

} from "lucide-react";






export default function OwnerDetailSection({

    property

}: any) {


    const [showPhone, setShowPhone] = useState(false);

    const [userType, setUserType] = useState("Individual");








    return (


        <div>





            <h2 className="text-3xl font-bold text-orange-200 mb-6">


                Owner Detail


            </h2>









            <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-6">







                {/* LEFT OWNER DETAIL */}



                <div className="bg-white/10 border border-white/20 rounded-2xl p-5">








                    <div className="flex items-center gap-4">








                        {/* AVATAR */}


                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">


                            <User
                                size={24}
                                className="text-orange-200"
                            />


                        </div>









                        <div>


                            <h3 className="text-lg font-bold text-white">


                                Rajesh Kumar


                            </h3>






                            <p className="text-sm text-gray-400 capitalize">


                                {property.owner}


                            </p>


                        </div>








                    </div>












                    {/* VERIFIED */}


                    <div className="mt-4 flex items-center gap-2">


                        <CheckCircle
                            size={18}
                            className="text-green-400"
                        />


                        <span className="text-sm text-green-400 font-semibold">


                            Verified Owner


                        </span>


                    </div>











                    {/* JOINED */}


                    <div className="mt-5">


                        <p className="text-sm text-gray-400">


                            Joined DreamHome


                        </p>


                        <p className="text-white font-semibold">


                            January 2024


                        </p>


                    </div>












                    {/* PHONE */}


                    <button


                        onClick={() => setShowPhone(!showPhone)}


                        className="
        mt-5
        w-full
        py-2.5

        rounded-full

        bg-blue-600

        text-white
        text-sm
        font-bold

        flex
        items-center
        justify-center
        gap-2

        hover:bg-orange-200
        hover:text-black

        transition-all
        duration-300

        cursor-pointer
    "


                    >



                        <Phone

                            size={16}

                        />




                        <span>


                            {


                                showPhone


                                    ?


                                    "+91 98765 43210"


                                    :


                                    "View Phone Number"


                            }


                        </span>




                    </button>









                </div>
















                {/* RIGHT ENQUIRY FORM */}


                <div className="bg-white/10 border border-white/20 rounded-[1.5rem] p-6">









                    <h3 className="text-lg font-bold text-orange-200 mb-4">


                        Send Enquiry


                    </h3>









                    <div className="space-y-3">


                        {/* USER TYPE */}


                        <div>


                            <p className="text-sm text-gray-400 mb-3">


                                I am a


                            </p>




                            <div className="flex gap-5">



                                <label className="flex items-center gap-2 cursor-pointer">


                                    <input

                                        type="radio"

                                        name="userType"

                                        checked={userType === "Individual"}

                                        onChange={() => setUserType("Individual")}

                                        className="hidden"

                                    />



                                    <span

                                        className={`w-4 h-4 rounded-full border flex items-center justify-center

                ${userType === "Individual"

                                                ?

                                                "border-orange-200"

                                                :

                                                "border-gray-400"

                                            }

                `}

                                    >


                                        {

                                            userType === "Individual" &&


                                            <span className="w-2 h-2 rounded-full bg-orange-200" />

                                        }


                                    </span>





                                    <span className="text-sm text-white">


                                        Individual


                                    </span>



                                </label>









                                <label className="flex items-center gap-2 cursor-pointer">


                                    <input

                                        type="radio"

                                        name="userType"

                                        checked={userType === "Dealer"}

                                        onChange={() => setUserType("Dealer")}

                                        className="hidden"

                                    />



                                    <span

                                        className={`w-4 h-4 rounded-full border flex items-center justify-center

                ${userType === "Dealer"

                                                ?

                                                "border-orange-200"

                                                :

                                                "border-gray-400"

                                            }

                `}

                                    >


                                        {

                                            userType === "Dealer" &&


                                            <span className="w-2 h-2 rounded-full bg-orange-200" />

                                        }


                                    </span>






                                    <span className="text-sm text-white">


                                        Dealer


                                    </span>



                                </label>



                            </div>


                        </div>








                        <input

                            placeholder="Your Name"

                            className="
                        w-full px-4 py-2.5
                        rounded-xl
                        bg-white/10
                        border border-white/20
                        text-sm text-white
                        outline-none
                        focus:border-orange-200"

                        />









                        <input

                            placeholder="Phone Number"

                            className="
                        w-full px-4 py-2.5
                        rounded-xl
                        bg-white/10
                        border border-white/20
                        text-sm text-white
                        outline-none
                        focus:border-orange-200"

                        />









                        <textarea

                            rows={2}

                            placeholder="Message"

                            className="
                        w-full px-4 py-2.5
                        rounded-xl
                        bg-white/10
                        border border-white/20
                        text-sm text-white
                        resize-none
                        outline-none
                        focus:border-orange-200"

                        />









                        <button

                            className="
                        w-full py-3
                        rounded-full
                        bg-orange-200
                        text-black
                        text-sm
                        font-bold
                        flex items-center justify-center gap-2
                        hover:bg-white
                        transition
                        cursor-pointer"

                        >


                            <Send size={16} />


                            Send Enquiry


                        </button>








                    </div>








                </div>









            </div>








        </div >


    );


}