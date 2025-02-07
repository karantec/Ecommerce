import React from "react";
import { FaPlay } from "react-icons/fa";

const HeroSection = () => {
  // JSON-like data defined in the same file
  const content = {
    aboutUs: "About us",
    heading: "About Sri Laxmi Alankar",
    subheading: "Learn More about company",
    description:
      "The Indian rupee is the official currency in the Republic of India. The rupee is subdivided into 100 paise, though as of 2023, coins of denomination of 1 rupee are the lowest value in.",
    playNow: "Play Now",
  };

  return (
    <section className="text-gray-600 body-font flex items-center justify-center">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Left Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h5 className="title-font sm:text-1xl text-1xl mb-4 font-medium text-gray-900">
            {content.aboutUs}
          </h5>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {content.heading}
            <br className="hidden lg:inline-block" /> {content.subheading}
          </h1>
          <p className="mb-8 leading-relaxed">{content.description}</p>
          <div className="flex justify-center items-center space-x-2">
            <FaPlay className="bg-orange-500 text-white rounded-full p-3 cursor-pointer w-10 h-10" />
            <span className="text-lg text-gray-700">{content.playNow}</span>
          </div>
        </div>
        {/* Right Content */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="About1.png"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
