"use client";


import {

    Dispatch,
    SetStateAction,
    useEffect,
    useRef,
    useState

} from "react";








export default function PropertyNavigation({

    activeSection,

    setActiveSection,

    scrollToSection

}: {


    activeSection:string;


    setActiveSection:Dispatch<SetStateAction<string>>;


    scrollToSection:(section:string)=>void;


}) {









    const sections = [

        "Overview",

        "Owner Detail",

        "Explore Locality",

        "Similar Properties",

        "Customer Feedback"

    ];









    const [indicator,setIndicator] = useState({

        left:0,

        width:0

    });






    const containerRef = useRef<HTMLDivElement>(null);










    const moveIndicator = (section:string)=>{



        const buttons = containerRef.current?.querySelectorAll("button");





        buttons?.forEach((button)=>{



            if(button.innerText === section){



                setIndicator({

                    left:button.offsetLeft,

                    width:button.offsetWidth

                });



            }



        });



    };











    // ACTIVE CHANGE FROM SCROLL


    useEffect(()=>{



        moveIndicator(activeSection);



    },[activeSection]);












    // INITIAL OVERVIEW LINE POSITION


    useEffect(()=>{



        setTimeout(()=>{


            moveIndicator(activeSection);


        },100);



    },[]);












    const handleClick=(section:string)=>{






        // change text instantly

        setActiveSection(section);






        // move orange line instantly

        moveIndicator(section);







        // smooth scroll page

        scrollToSection(section);






    };













    return (



        <div className="mt-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 px-6">






            <div

                ref={containerRef}

                className="relative flex justify-between overflow-x-auto hide-scrollbar"

            >











                {/* MOVING LINE */}


                <span


                    className="absolute bottom-0 h-[3px] rounded-full bg-orange-200 shadow-[0_0_25px_#fed7aa] transition-all duration-500 ease-out"


                    style={{


                        left:indicator.left,


                        width:indicator.width


                    }}


                />












                {

                    sections.map((item)=>(







                        <button


                            key={item}



                            onClick={()=>handleClick(item)}



                            className={`px-5 py-4 whitespace-nowrap font-bold cursor-pointer transition-all duration-300




                            ${


                                activeSection === item


                                ?


                                "text-orange-200 scale-110"


                                :


                                "text-gray-300 hover:text-blue-400 hover:drop-shadow-[0_0_15px_#60a5fa]"



                            }


                            `}


                        >







                            {item}








                        </button>








                    ))

                }









            </div>







        </div>



    );


}