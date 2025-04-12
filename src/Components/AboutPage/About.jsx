import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-12 bg-white">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-5xl md:text-4xl font-serif tracking-wider text-[#2D1A22] mb-4">
            TIMELESS AND ORIGINAL RETRO JEWELRY PIECES
          </h1>
          <p className="text-3xl md:text-base tracking-wider text-[#2D1A22] mb-6">
            EXCLUSIVELY AT THE GEMS OF KOLKATA
          </p>
          <Link to="collections" className="">
            <button className="bg-[#2D1A22] text-white text-sm md:text-sm px-6 py-2 rounded-full hover:bg-opacity-90 transition-all mb-10 text-base">
              EXPLORE OUR EXQUISITE RANGE
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 relative mb-10">
          <div className="rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-none overflow-hidden p-4">
            <img
              src="/about/hero.jpg"
              alt="Luxury jewelry with flowers"
              className="rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-none"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16 py-12 bg-white">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-200 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-4.5-8.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M13 8a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Global Shipping Solutions</h3>
          <p className="text-lg text-gray-600">
            Nationwide shipping across India
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-200 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Returns Accepted</h3>
          <p className="text-lg text-gray-600">
            Quick refunds with hassle-free return options
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-200 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Safety and Security</h3>
          <p className="text-lg text-gray-600">
            Reliable Services for Heavy Commercial and Industrial Needs
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-12 bg-white">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-5xl md:text-3xl font-serif text-[#2D1A22] mb-4">
            Welcome to SLA
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            This is not just a jewellery store; it's a haven for those who
            appreciate the artistry of exquisite jewellery. We take great pride
            in offering a collection that harmoniously blends timeless
            craftsmanship with modern styles. Our pieces are designed to elevate
            your special and treasured moments with jewellery that embodies
            sophistication, authenticity, and outstanding quality. Dive into our
            newest collections and see how we can illuminate your life.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Discover our newest collections and see how we can bring a sparkle
            to your life.
          </p>
          <button className="bg-[#2D1A22] text-white text-base px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
            LEARN MORE ABOUT OUR EXQUISITE OFFERINGS
          </button>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-full h-full bg-[#2D1A22] rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-none"></div>
            <div className="relative z-10 rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-none overflow-hidden">
              <img
                src="/about/36.png"
                alt="Gold jewelry collection"
                width={600}
                height={400}
                className="rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="relative px-4 md:px-16 py-12 bg-gray-100">
        <div className="absolute left-0 top-0 w-1/3 h-full bg-[#2D1A22]"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="bg-white p-8 border border-gray-200 mb-6 max-w-md mx-auto md:mx-0">
              <h3 className="text-4xl font-serif text-center mb-4">
                OUR VISION
              </h3>
              <p className="text-lg text-center">
                To create a stunning collection of jewelry that harmoniously
                combines classic craftsmanship with modern design.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 max-w-md mx-auto md:mx-0">
              <h3 className="text-4xl font-serif text-center mb-4">
                OUR MISSION
              </h3>
              <p className="text-lg text-center">
                To become your go-to jewelry companion for every special moment.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/about/women_wearing_aligent_jwelery.png"
              alt="Woman wearing elegant jewelry"
              width={600}
              height={600}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="px-4 md:px-16 py-12 bg-gray-50">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 grid grid-cols-1 gap-4">
            <div className="bg-white overflow-hidden">
              <img
                src="/about/image_6.jpg"
                alt="Necklace with pendant"
                className="w-full"
              />
            </div>
            {/* <div className="bg-[#2D1A22] rounded-3xl overflow-hidden">
              <img
                src="/about/image-5.jpg"
                alt="Elegant necklace"
                className="w-full h-[300px] opacity-80"
              />
            </div> */}
          </div>

          <div className="w-full md:w-2/3 md:pl-12">
            <h2 className="text-5xl md:text-3xl font-serif text-[#2D1A22] mb-6">
              The Journey of Our Jewellery Brand
            </h2>
            <p className="text-base text-gray-700 mb-4">
              SLA's inception is a recent one, our brand has emerged as a symbol
              of excellence in the jewelry industry. We create timeless pieces,
              and innovation is only a way to enhance the timeless beauty of
              craftsmanship.
            </p>
            <p className="text-base text-gray-700 mb-4">
              As our reputation flourished, so did our dedication to meeting a
              variety of tastes and preferences. Over the years, we broadened
              our collection to feature an extensive array of jewelry, embracing
              the classic and the contemporary. Our designs are a testament to
              our commitment to quality, elegance, and personal pieces that pay
              homage to cultural heritage to contemporary designs tailored for
              the evolving tastes of today's generation. We ensure that every
              customer discovers something that reflects their unique style.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold uppercase mb-2">
              Quality Control
            </h3>
            <p className="text-base text-gray-600">
              Each piece of jewelry is subjected to rigorous quality
              examinations to ensure the highest standards of artistry and
              longevity.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold uppercase mb-2">
              Convenient Delivery
            </h3>
            <p className="text-base text-gray-600">
              Our delivery system operates smoothly across the country, ensuring
              your jewelry reaches you safely.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold uppercase mb-2">
              High Quality Materials
            </h3>
            <p className="text-base text-gray-600">
              Made with the finest materials, our jewelry pieces are designed to
              last and maintain their beauty.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold uppercase mb-2">Dedicated Team</h3>
            <p className="text-base text-gray-600">
              We foster working collaborations. Our team is dedicated to
              delivering your requirements promptly & professionally.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold uppercase mb-2">
              Warranty & Quality
            </h3>
            <p className="text-base text-gray-600">
              Our extensive quality checks can at every step of your jewelry's
              development, guaranteeing an excellent outcome.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold uppercase mb-2">
              Exceptional Designs
            </h3>
            <p className="text-base text-gray-600">
              Explore a collection that blends timeless craftsmanship with
              contemporary designs, ensuring each piece is uniquely exceptional.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
