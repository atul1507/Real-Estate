"use client";


import {

    Suspense

} from "react";


import {

    useSearchParams

} from "next/navigation";


import PropertyList from "@/components/property/PropertyList";









function BuyContent(){



    const searchParams = useSearchParams();



    const city = searchParams.get("city") || "";









    return (


        <>


            <div className="h-16 bg-black"/>





            <PropertyList


                mode="buy"


                searchedCity={city}


            />



        </>


    );


}









export default function BuyPage(){



    return (


        <Suspense fallback={null}>


            <BuyContent/>


        </Suspense>


    );


}