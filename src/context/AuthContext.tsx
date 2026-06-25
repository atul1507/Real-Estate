"use client";


import {

    createContext,

    useContext,

    useEffect,

    useState

} from "react";








type User = {


    id:string;


    name:string;


    email:string;


    role:string;


};









type AuthContextType = {


    user:User | null;


    loading:boolean;


    login:(

        email:string,

        password:string

    )=>Promise<boolean>;



    register:(

        name:string,

        email:string,

        password:string

    )=>Promise<boolean>;



    logout:()=>Promise<void>;


};









const AuthContext = createContext<AuthContextType | null>(

    null

);










export function AuthProvider({

    children

}:{

    children:React.ReactNode

}){





    const [user,setUser] = useState<User | null>(

        null

    );



    const [loading,setLoading] = useState(

        true

    );










    async function checkAuth(){


        try{


            const res = await fetch(

                "/api/auth/me"

            );



            const data = await res.json();




            if(res.ok){


                setUser(

                    data.data

                );


            }



        }

        catch(error){


            setUser(null);


        }


        finally{


            setLoading(false);


        }


    }











    async function login(

        email:string,

        password:string

    ){


        const res = await fetch(

            "/api/auth/login",

            {


                method:"POST",


                headers:{

                    "Content-Type":"application/json"

                },


                body:JSON.stringify({

                    email,

                    password

                })


            }

        );





        const data = await res.json();





        if(res.ok){


            setUser(

                data.data

            );


            return true;


        }





        return false;


    }












    async function register(

        name:string,

        email:string,

        password:string

    ){



        const res = await fetch(

            "/api/auth/register",

            {


                method:"POST",


                headers:{


                    "Content-Type":"application/json"


                },



                body:JSON.stringify({

                    name,

                    email,

                    password

                })


            }


        );







        const data = await res.json();






        if(res.ok){


            setUser(

                data.data

            );


            return true;


        }






        return false;


    }









    async function logout(){


        await fetch(

            "/api/auth/logout",

            {

                method:"POST"

            }

        );



        setUser(null);


    }









    useEffect(()=>{


        checkAuth();


    },[]);











    return (


        <AuthContext.Provider

            value={{

                user,

                loading,

                login,

                register,

                logout

            }}

        >


            {children}


        </AuthContext.Provider>


    );


}









export function useAuth(){


    const context = useContext(

        AuthContext

    );



    if(!context){


        throw new Error(

            "useAuth must be inside AuthProvider"

        );


    }




    return context;


}