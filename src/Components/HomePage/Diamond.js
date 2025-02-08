import React from "react";

const PremiumCollectionBanner = () => {
  return (
    <div className="relative w-full mt-9 max-w-screen-2xl mx-auto">
      {/* Background Image */}
      <img
        src="Feature/Image.png" // Replace with your actual image path
        alt="Premium Diamond Ring"
        className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-start px-6 md:px-12 lg:px-20">
        <div className="text-white  p-4 md:p-6 rounded-lg">
          <h2 className="text-base md:text-2xl lg:text-4xl font-serif leading-tight">
            FIND OUR PREMIUM RANGE
            <br />
            UNIQUE COLLECTION
          </h2>
          <button className="mt-4 px-5 py-2 border border-white text-white text-xs md:text-sm lg:text-base hover:bg-white hover:text-black transition">
            DISCOVER THE COLLECTION
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumCollectionBanner;
