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
      {/* Hero Section 1 */}

      <HeroSection1 />

      <TeamSection />
      {/* <WhyChooseUs />
      <FeaturesSection /> */}

      {/* Gallery */}
      <div className="flex justify-center items-center min-h-screen bg-white px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
          {/* Image 1 */}
          <div className="w-full h-[450px] overflow-hidden">
            <img
              src="/about/image1.svg" // Replace with actual image path
              alt="Jewelry 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="w-full h-[450px] overflow-hidden md:mt-[40%]">
            <img
              src="/about/image2.svg" // Replace with actual image path
              alt="Jewelry 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="w-full h-[450px] overflow-hidden">
            <img
              src="/about/image3.svg" // Replace with actual image path
              alt="Jewelry 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Image Section */}
      {/* <h1 className="text-center text-2xl font-sans font-bold mt-12">
        {" "}
        See Some Glimpse of Design
      </h1>
      <div className="flex justify-center  mt-20 px-4 sm:px-6 md:px-10">
        <img
          src="jewellery.png"
          alt="About3"
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl "
        />
      </div> */}

      {/* Feature Section */}
      <div className="py-12">
        <FeatureSection />
      </div>
    </div>
  );
};

export default About;
