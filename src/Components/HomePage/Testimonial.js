import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Priyanka Sharma",
    text: "I found the perfect bridal jewelry set at Shri Laxmi Alankar. The intricate detailing and quality were beyond my expectations!",
    category: "Bridal Collection",
    rating: 5
  },
  {
    name: "Rajesh Kumar",
    text: "Their customization service is truly exceptional. They helped me design a unique piece that I now treasure.",
    category: "Custom Design",
    rating: 5
  },
  {
    name: "Sneha Sinha",
    text: "I always turn to Shri Laxmi Alankar for gifts. Their variety and customer service are unmatched.",
    category: "Gift Shopping",
    rating: 5
  },
  {
    name: "Anjali Mishra",
    text: "I was amazed by the level of detail and craftsmanship in the bridal set I purchased from Shri Laxmi Alankar. It made my wedding day truly special.",
    category: "Bridal Collection",
    rating: 5
  },
  {
    name: "Rohit Singh",
    text: "Their customization service exceeded my expectations. I now own a piece of jewelry that is uniquely mine!",
    category: "Custom Design",
    rating: 5
  },
  {
    name: "Suman Gupta",
    text: "Shri Laxmi Alankar has been our family's go-to jewelry store for years. The quality and service are unmatched.",
    category: "Loyal Customer",
    rating: 5
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

  const renderStars = (rating) => {
    return (
      <div className="flex justify-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full mt-16">
      {/* Title Section */}
      <div className="text-center mb-12 px-6">
        {/* Icon and Line */}
        <div className="flex items-center justify-center space-x-4 mb-3">
          <div className="w-20 h-px bg-gray-300"></div>
          <img src="/Category/icon.png" alt="Diamond Icon" className="w-8 h-8 inline-block" />
          <div className="w-20 h-px bg-gray-300"></div>
        </div>

        {/* Title */}
        <h2 className="text-5xl font-garamond bg-gradient-to-r from-[#E66E06] to-[#6E3000] text-transparent bg-clip-text font-bold">
          Our Customers
        </h2>
      </div>

      {/* Full Width Background */}
      <div className="w-full bg-[#FDF8F3] py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index}
                      className="w-full flex-shrink-0"
                    >
                      <div className="max-w-4xl mx-auto text-center">
                        {/* Quotation Mark */}
                        <div className="flex justify-center mb-6">
                          <span className="text-7xl text-[#B45309] font-serif">"</span>
                        </div>
                        
                        {/* Testimonial Text */}
                        <p className="text-gray-800 text-2xl italic mb-12 leading-relaxed font-light tracking-wide">
                          {testimonial.text}
                        </p>
                        
                        {/* Profile Image */}
                        <div className="flex flex-col items-center">
                          <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                            <img 
                              src={`/api/placeholder/100/100`} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          {/* Customer Name */}
                          <p className="font-semibold text-gray-900 uppercase mb-2 text-lg tracking-wider">
                            {testimonial.name}
                          </p>
                          
                          {/* Star Rating */}
                          {renderStars(testimonial.rating)}
                          
                          {/* Navigation Dots */}
                          <div className="flex justify-center mt-8 space-x-2">
                            {testimonials.map((_, i) => (
                              <button
                                key={i}
                                onClick={() => goToSlide(i)}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                  i === currentSlide ? 'bg-[#B45309]' : 'bg-gray-300'
                                }`}
                                aria-label={`Go to slide ${i + 1}`}
                              />
                            ))}
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
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-3 shadow-lg hover:bg-white"
              aria-label="Previous testimonial"
            >
              <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-3 shadow-lg hover:bg-white"
              aria-label="Next testimonial"
            >
              <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComponent;