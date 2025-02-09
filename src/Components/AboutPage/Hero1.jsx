import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const content = {
    aboutUs: "About us",
    heading: " Shri Laxmi Alankar",
    description: "Shri Laxmi Alankar is more than a jewelry store—it is a destination for those who cherish the art of fine jewelry. Wetake immense pride in presenting a collection that blends thebeauty of age-old craftsmanship with contemporary trends. Ourmission is to help you celebrate your life's most cherishedmoments with jewelry that speaks of elegance, authenticity, andexceptional quality.",
    bold: "Explore our latest collections and discover how Shri Laxmi Alankar can add a touch of brilliance to your life"
  };

  return (
    <section className="text-gray-600 body-font flex items-center justify-center">
      <div className="container mx-auto flex px-5 py-18 md:flex-row flex-col items-center">
        {/* Left Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h5 className="title-font text-3xl uppercase mb-4 font-garmond text-gray-900">
            {content.aboutUs}
          </h5>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {content.heading}
          </h1>
          <p className="mb-8 text-[18px] leading-relaxed font-garmond text-black">
            {content.description}
          </p>
          <p className="mb-8 text-[25px] font-bold font-garmond text-black">
            {content.bold}
          </p>
        </div>
        {/* Right Content */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {!isPlaying ? (
            <div 
              className="relative group cursor-pointer" 
              onClick={() => setIsPlaying(true)}
            >
              <img
                className="object-cover object-center rounded w-full"
                alt="hero"
                src="https://i.ytimg.com/vi/Nhu6nFA3YTU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCpt6TbB4JRMnyqwoDtwENJCZXyRQ"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600 hover:bg-red-700 transition-colors duration-300 rounded-full p-4 bg-opacity-80 group-hover:bg-opacity-100">
                  <FaPlay className="text-white text-4xl" />
                </div>
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded"></div>
            </div>
          ) : (
            <div className="relative pt-[56.25%] w-full rounded overflow-hidden">
              <iframe 
                className="absolute top-0 left-0 w-full h-full rounded"
                src="https://www.youtube.com/embed/Nhu6nFA3YTU?si=fZZHSRtg0zOWZAfK&autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;