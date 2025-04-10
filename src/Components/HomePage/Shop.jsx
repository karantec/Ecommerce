import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryShowcase = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://jewelleryapp.onrender.com/category/getAllCategory"
      );

      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error(error);
      setCategories([]);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto px-4 py-28">
      {/* Header */}
      <div className="text-center mb-8">
        {/* Icon and Line */}
        <div className="flex items-center justify-center space-x-4 mb-2">
          <div className="w-16 h-px bg-gray-300"></div>
          <img
            src="Category/icon.png"
            alt="Diamond Icon"
            className="w-6 h-6 inline-block"
          />

          <div className="w-16 h-px bg-gray-300"></div>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-garamond bg-gradient-to-r from-[#E66E06] to-[#6E3000] text-transparent bg-clip-text">
          Shop By Category
        </h2>

        {/* Subtitle */}
        <p className="text-[#7A3601] uppercase tracking-wide text-sm mt-1">
          OUR EVERYDAY PIECES
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden"
          >
            {/* Image */}

            <img
              src={category.image}
              alt={category.title}
              className="w-full h-70 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

            {/* Category Name */}
            <div className="absolute bottom-4 left-4 text-white">
              <Link to="/productlist">
                <h3 className="text-xl font-garamond">{category.title}</h3>
              </Link>
            </div>

            {/* Labels (only for Chains) */}
            {category.labels && (
              <div
                className="absolute top-1/2 left-1/2 mt-24 transform -translate-x-1/2 -translate-y-1/2 
              sm:top-4 sm:left-4 sm:transform-none 
              backdrop-blur-sm bg-white/30 border border-gray-300 
              px-3 py-2 sm:px-4 sm:py-3 
              rounded-lg shadow-md w-auto max-w-32"
              >
                {category.labels.map((label, labelIndex) => (
                  <div
                    key={labelIndex}
                    className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2 text-center sm:text-left mb-2 last:mb-0"
                  >
                    <span className={label.color} style={{ fontSize: "24px" }}>
                      {" "}
                      {/* Adjusted for mobile */}
                      {label.icon}
                    </span>
                    <span className="text-gray-800 font-garamond font-medium underline text-sm sm:text-lg">
                      {label.text}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        <div className="w-2 h-2 rounded-full bg-gray-300" />
        <div className="w-2 h-2 rounded-full bg-[#E86A1E]" />
        <div className="w-2 h-2 rounded-full bg-gray-300" />
        <div className="w-2 h-2 rounded-full bg-gray-300" />
      </div>
    </div>
  );
};

export default CategoryShowcase;
