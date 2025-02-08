import React from "react";
import { FaPlay } from "react-icons/fa";

const HeroSection1 = () => {
  // Updated content
  const content = {
    heading: "History of Shri Laxmi Alankar",
    description: `
      Since its establishment in ………, Shri Laxmi Alankar has stood as a shining beacon of
      excellence in the jewelry industry, blending tradition, artistry, and innovation into every
      creation. Founded in the heart of Muzaffarpur, a city rich in cultural heritage, our
      journey began with a vision to provide exquisite and high-quality jewelry that
      would celebrate the timeless beauty of Indian craftsmanship. Over the years, this
      vision has evolved into a legacy of trust, artistry, and an unwavering commitment to
      excellence.
    `,
    imageAlt: "hero",
    imageSrc: "About2.png",
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded-lg border-2 border-orange-400"
            alt={content.imageAlt}
            src={content.imageSrc}
          />
        </div>

        {/* Text Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {content.heading}
          </h2>
          <p className="mb-8 leading-relaxed text-start">
            {content.description.split("\n").map((line, index) => (
              <span key={index}>
                {line.trim()}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;