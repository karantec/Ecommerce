import React from "react";
import HeroSection from "./Hero1";
import HeroSection1 from "./Hero2";
import TeamSection from "./Hero3";
import FeatureSection from "./Hero4";
import FeaturesSection from "./FeatureSection";
import WhyChooseUs from "./WhyChooseus";

const About = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="py-12 bg-white">
        <HeroSection />
      </div>
      <FeaturesSection/>
           <WhyChooseUs/>
      {/* Hero Section 1 */}
      
        <HeroSection1 />
      

      {/* Team Section */}
     
        <TeamSection />
      
     
      {/* Image Section */}<h1 className="text-center text-2xl font-sans font-bold mt-12"> See Some Glimpse of Design</h1>
      <div className="flex justify-center  mt-20 px-4 sm:px-6 md:px-10">
      
        <img
          src="jewellery.png"
          alt="About3"
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl "
        />
      </div>

      {/* Feature Section */}
      <div className="py-12">
        <FeatureSection />
      </div>
    </div>
  );
};

export default About;
