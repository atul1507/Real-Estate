import {

    Bed,

    Bath,

    MapPin

} from "lucide-react";





export default function RecommendedCard({

    property

}:any){



    return(


        <div className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">


            
            {/* TEMP IMAGE UNTIL CLOUDINARY */}


            <div className="h-36 bg-gray-200 flex items-center justify-center text-sm text-gray-400">


                Property Image


            </div>










            <div className="p-4">



                <p className="text-xs text-blue-600 font-semibold">


                    {property.category}


                </p>




                <h3 className="mt-1 font-bold text-gray-900 truncate">


                    {property.title}


                </h3>





                <h2 className="mt-2 text-lg font-bold text-blue-600">


                    {property.price}


                </h2>






                <div className="mt-3 flex items-center gap-1 text-sm text-gray-500">


                    <MapPin size={14}/>


                    {property.location}


                </div>






                <div className="mt-4 flex justify-between text-xs text-gray-600">


                    <span className="flex gap-1">

                        <Bed size={14}/>

                        {property.beds}

                    </span>




                    <span className="flex gap-1">

                        <Bath size={14}/>

                        {property.bathroom}

                    </span>




                    <span>

                        {property.area}

                    </span>


                </div>



            </div>



        </div>


    )


}