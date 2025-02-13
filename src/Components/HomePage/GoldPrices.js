import React from 'react';

const GoldPrices = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8">
      <h1 className="text-orange-500 text-3xl font-bold sm:text-3xl text-center mb-2 font-garamond">
        Current Gold Prices
      </h1>
      <p className="text-center text-gray-600 mb-8 sm:mb-12 font-garamond text-sm sm:text-base">
        PURE & TRANSPARENT
      </p>
      
      {/* Flex container that switches to column on mobile */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-0">
        {/* 18 Karat Section */}
        <div className="flex-1 text-center w-full sm:w-auto">
          <h2 className="text-base sm:text-lg mb-3 sm:mb-4 font-brown">
            18 Karat Gold Price, (10 g)
          </h2>
          <div className="text-brown-600 text-4xl sm:text-5xl font-semibold mb-3 sm:mb-4">
            <span className="font-normal">₹</span> 64,297
          </div>
          <p className="text-gray-600 text-sm sm:text-base">75% Gold</p>
        </div>

        {/* Divider - horizontal for mobile, vertical for desktop */}
        <div className="w-full h-px sm:w-px sm:h-40 bg-brown-600 sm:mx-8"></div>

        {/* 22 Karat Section */}
        <div className="flex-1 text-center w-full sm:w-auto">
          <h2 className="text-base sm:text-lg mb-3 sm:mb-4 font-brown">
            22 Karat Gold Price, (10 g)
          </h2>
          <div className="text-brown-600 text-4xl sm:text-5xl font-semibold mb-3 sm:mb-4">
            <span className="font-normal">₹</span> 80,800
          </div>
          <p className="text-gray-600 text-sm sm:text-base">91.7% Gold</p>
        </div>
      </div>
    </div>
  );
};

export default GoldPrices;