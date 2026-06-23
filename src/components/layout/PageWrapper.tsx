type PageWrapperProps = {

    children: React.ReactNode;

};



export default function PageWrapper({

    children

}: PageWrapperProps){



return (

<>


{/* NAVBAR SPACE */}

<div

className="

h-16

bg-black

"

/>





{/* PAGE CONTENT */}

<div

className="

min-h-screen

"

>


{children}


</div>



</>


);


}