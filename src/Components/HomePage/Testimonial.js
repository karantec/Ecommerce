import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Priyanka Sharma",
    text: "I found the perfect bridal jewelry set at Shri Laxmi Alankar. The intricate detailing and quality were beyond my expectations!",
    category: "Bridal Collection"
  },
  {
    name: "Rajesh Kumar",
    text: "Their customization service is truly exceptional. They helped me design a unique piece that I now treasure.",
    category: "Custom Design"
  },
  {
    name: "Sneha Sinha",
    text: "I always turn to Shri Laxmi Alankar for gifts. Their variety and customer service are unmatched.",
    category: "Gift Shopping"
  },
  {
    name: "Anjali Mishra",
    text: "I was amazed by the level of detail and craftsmanship in the bridal set I purchased from Shri Laxmi Alankar. It made my wedding day truly special.",
    category: "Bridal Collection"
  },
  {
    name: "Rohit Singh",
    text: "Their customization service exceeded my expectations. I now own a piece of jewelry that is uniquely mine!",
    category: "Custom Design"
  },
  {
    name: "Suman Gupta",
    text: "Shri Laxmi Alankar has been our family's go-to jewelry store for years. The quality and service are unmatched.",
    category: "Loyal Customer"
  }
];

const TestimonialsComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="w-full max-w-8xl  mt-10 mx-auto p-6">
     <div className="text-center mb-8">
        {/* Icon and Line */}
        <div className="flex items-center justify-center space-x-4 mb-2">
          <div className="w-16 h-px bg-gray-300"></div>
          <img src="Category/icon.png" alt="Diamond Icon" className="w-6 h-6 inline-block" />

          <div className="w-16 h-px bg-gray-300"></div>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-garamond bg-gradient-to-r from-[#E66E06] to-[#6E3000] text-transparent bg-clip-text">
       Our Customers
</h2>


        {/* Subtitle */}
        
      </div>

      {/* Mobile Carousel (visible on small screens) */}
      <div className="block md:hidden">
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="flex flex-col h-full">
                        <div className="mb-4">
                          <svg 
                            className="w-8 h-8 text-black uppercase font-bold mb-2" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M8 10.5h-.5a2.5 2.5 0 1 1 2.5-2.5v.5c0 .666-.251 1.4-.746 2.01L7.5 13" 
                            />
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M16 10.5h-.5a2.5 2.5 0 1 1 2.5-2.5v.5c0 .666-.251 1.4-.746 2.01L15.5 13" 
                            />
                          </svg>
                          <p className="text-2xl text-black uppercase font-bold">{testimonial.category}</p>
                        </div>
                        <p className="text-gray-700 flex-grow mb-4 italic">
                          "{testimonial.text}"
                        </p>
                        <div className="mt-auto">
                          <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Grid (visible on medium and larger screens) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <svg 
                  className="w-8 h-8 text-blue-500 mb-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M8 10.5h-.5a2.5 2.5 0 1 1 2.5-2.5v.5c0 .666-.251 1.4-.746 2.01L7.5 13" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M16 10.5h-.5a2.5 2.5 0 1 1 2.5-2.5v.5c0 .666-.251 1.4-.746 2.01L15.5 13" 
                  />
                </svg>
                <p className="text-sm text-black uppercase font-bold">{testimonial.category}</p>
              </div>
              <p className="text-gray-700 flex-grow mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="mt-auto">
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsComponent;