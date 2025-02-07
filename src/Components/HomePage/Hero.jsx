import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [carousel, setCarousel] = useState({ text: "", images: [] });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jewelleryapp.onrender.com/home/get");
        const data = await response.json();
        setCarousel(data.carousel);
      } catch (error) {
        console.error("Error fetching hero section data:", error);
      }
    };

    fetchData();
  }, []);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (carousel.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carousel.images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [carousel]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carousel.images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carousel.images.length) % carousel.images.length);
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${carousel.images[currentIndex] || "home.png"})` }}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-4xl lg:text-5xl font-bold text-black">
          {carousel.text || "UNIQUE AND AUTHENTIC VINTAGE DESIGNER JEWELLERY"}
        </h1>
        <p className="mt-4 text-lg text-dark font-bold">
          NOW AVAILABLE AT THE Sri Laxmi Alankar
        </p>
        <button className="mt-6 px-6 py-3 bg-brown-700 font-bold text-white rounded-full hover:bg-brown-800 transition">
          DISCOVER THE COLLECTION
        </button>
      </div>

      {/* Navigation Buttons */}
      {carousel.images.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full"
            onClick={handlePrev}
          >
            ⬅
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full"
            onClick={handleNext}
          >
            ➡
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {carousel.images.length > 1 && (
        <div className="absolute bottom-6 flex space-x-2">
          {carousel.images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${index === currentIndex ? "bg-orange-500 w-4" : "bg-gray-300"}`}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSection;
