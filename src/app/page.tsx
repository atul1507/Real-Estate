import Hero from "@/components/home/Hero";

import FeaturedProperties from "@/components/home/FeaturedProperties";

import PropertyActions from "@/components/home/PropertyActions";

import WhyChooseUs from "@/components/home/WhyChooseUs";

import CustomerStories from "@/components/home/CustomerStories";

import RecommendedProperties from "@/components/home/recommended/RecommendedProperties";





export default function Home() {


    return (


        <>


            <Hero />



            <FeaturedProperties />

            <RecommendedProperties />

            <PropertyActions />

            <WhyChooseUs />

            <CustomerStories />



        </>


    );


}