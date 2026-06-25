import RecommendedSection from "./RecommendedSection";





export default function RecommendedProperties(){


    return(


        <section className="bg-white py-20 px-5">


            <div className="max-w-7xl mx-auto space-y-20">


                <RecommendedSection

                    title="Recommended Properties To Buy"

                    type="buy"

                />




                <RecommendedSection

                    title="Recommended Properties To Rent"

                    type="rent"

                />


            </div>


        </section>


    )


}