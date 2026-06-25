"use client";


import { useState } from "react";


import {

    motion,
    AnimatePresence

} from "framer-motion";


import {

    Home,
    Eye,
    EyeOff

} from "lucide-react";


import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";





export default function AuthPage() {


    const [login, setLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();


    const {

        login: loginUser,

        register

    } = useAuth();





    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");



    async function handleSubmit() {


        setError("");



        let success = false;





        if (login) {


            success = await loginUser(

                email,

                password

            );


        }


        else {


            success = await register(

                name,

                email,

                password

            );


        }





        if (success) {


            router.replace("/");


        }


        else {


            setError(

                "Authentication failed"

            );


        }


    }





    return (

        <section

            className="

relative

min-h-screen

bg-black

overflow-hidden


flex

items-center

justify-center


px-4

py-24

sm:py-10

"

        >



            {/* DYNAMIC GLOW */}


            <motion.div


                animate={{


                    backgroundColor:

                        login

                            ?

                            "rgba(37,99,235,.35)"

                            :

                            "rgba(254,215,170,.55)"


                }}


                transition={{

                    duration: .6

                }}



                className="

absolute

w-[600px]

h-[600px]

rounded-full

blur-[150px]

"

            />









            <motion.div


                layout



                animate={{


                    backgroundColor:

                        login

                            ?

                            "rgba(37,99,235,.85)"

                            :

                            "rgba(254,215,170,.95)",



                    boxShadow:

                        login

                            ?

                            "0 0 100px rgba(37,99,235,.45)"

                            :

                            "0 0 100px rgba(255,255,255,.45)"


                }}



                transition={{ duration: .5 }}



                className="

relative

z-10


w-full

max-w-[380px]

sm:max-w-md


rounded-[1.5rem]

sm:rounded-[2rem]


p-6

sm:p-10


border

border-white/20

"

            >





                {/* ICON */}


                <motion.div


                    animate={{


                        backgroundColor:

                            login ? "#000000" : "#ffffff",


                        color:

                            login ? "#ffffff" : "#000000"



                    }}



                    className="

mx-auto

mb-4

sm:mb-6


w-12

h-12


sm:w-16

sm:h-16


rounded-full


flex

items-center

justify-center

"

                >


                    <Home className="w-7 h-7 sm:w-9 sm:h-9" />


                </motion.div>









                <AnimatePresence mode="wait">



                    <motion.div


                        key={login ? "login" : "register"}


                        initial={{

                            opacity: 0,

                            x: 50

                        }}


                        animate={{

                            opacity: 1,

                            x: 0

                        }}


                        exit={{

                            opacity: 0,

                            x: -50

                        }}


                        transition={{ duration: .3 }}


                    >







                        <h1


                            className={`

text-center

text-3xl
sm:text-4xl

font-bold

mb-3


${login

                                    ?

                                    "text-white"

                                    :

                                    "text-black"

                                }

`}

                        >


                            {

                                login

                                    ?

                                    "Welcome Back"

                                    :

                                    "Create Account"

                            }


                        </h1>






                        <p

                            className={`

text-center

mb-8


${login

                                    ?

                                    "text-blue-100"

                                    :

                                    "text-gray-700"

                                }

`}

                        >


                            {

                                login

                                    ?

                                    "Continue your home journey"

                                    :

                                    "Start finding your dream home"

                            }


                        </p>


                        <div className="space-y-5">


                            {

                                !login &&

                                <input

                                    value={name}

                                    onChange={(e) => setName(e.target.value)}

                                    placeholder="Full Name"

                                    className={login ? "loginInput" : "signupInput"}

                                />

                            }







                            <input

                                value={email}

                                onChange={(e) => setEmail(e.target.value)}

                                placeholder="Email Address"

                                className={login ? "loginInput" : "signupInput"}

                            />







                            <div className="relative">


                                <input

                                    value={password}

                                    onChange={(e) => setPassword(e.target.value)}

                                    placeholder="Password"

                                    type={showPassword ? "text" : "password"}

                                    className={login ? "loginInput pr-12" : "signupInput pr-12"}

                                />





                                <button

                                    type="button"

                                    onClick={() => setShowPassword(!showPassword)}

                                    className={`absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer ${login ? "text-white" : "text-black"}`}

                                >


                                    {

                                        showPassword

                                            ?

                                            <EyeOff size={20} />

                                            :

                                            <Eye size={20} />

                                    }


                                </button>



                            </div>








                            {

                                error &&


                                <p className="text-center text-sm text-red-500">


                                    {error}


                                </p>

                            }








                            {

                                login &&


                                <div className="flex justify-end">


                                    <button

                                        type="button"

                                        className="text-sm text-white/90 hover:text-white hover:underline transition cursor-pointer"

                                    >


                                        Forgot Password?


                                    </button>


                                </div>


                            }





                        </div>









                        <button

                            onClick={handleSubmit}

                            className={`mt-8 w-full h-14 rounded-full font-bold transition cursor-pointer ${login ? "bg-white text-blue-600 hover:bg-black hover:text-white" : "bg-black text-white hover:bg-white hover:text-black"}`}

                        >


                            {

                                login

                                    ?

                                    "Login"

                                    :

                                    "Register"

                            }


                        </button>


                        <p

                            className={`

text-center

mt-8


${login

                                    ?

                                    "text-blue-100"

                                    :

                                    "text-gray-700"

                                }

`}

                        >


                            {

                                login

                                    ?

                                    "Don't have an account?"

                                    :

                                    "Already registered?"

                            }



                            <button


                                onClick={() => setLogin(!login)}


                                className="

ml-2

font-bold

underline


cursor-pointer


hover:scale-105


transition-transform

"

                            >


                                {

                                    login

                                        ?

                                        "Create"

                                        :

                                        "Login"

                                }


                            </button>




                        </p>







                    </motion.div>



                </AnimatePresence>





            </motion.div>




        </section>


    )

}