"use client";


import {

    Suspense

} from "react";


import {

    useSearchParams

} from "next/navigation";


import PropertyList from "@/components/property/PropertyList";









function RentContent() {



    const searchParams = useSearchParams();



    const city = searchParams.get("city") || "";









    return (


        <>


            <div className="h-16 bg-black" />





            <PropertyList

                mode="rent"

                searchedCity={city}

            />



        </>


    );


}










export default function RentPage() {



    return (


        <Suspense fallback={null}>


            <RentContent />


        </Suspense>


    );


}