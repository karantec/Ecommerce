import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../Common/LoadingSpinner";

function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await fetch(
          "jewelleryapp-production-0734.up.railway.app/about"
        );
        const data = await res.json();
        setAboutData(data.abouts[0]); // Assuming you want the first object
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);

  if (!aboutData) {
    return <LoadingSpinner />;
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-12 bg-white">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-5xl md:text-4xl font-serif tracking-wider text-[#2D1A22] mb-4">
            {aboutData.title}
          </h1>
          <p className="text-3xl md:text-base tracking-wider text-[#2D1A22] mb-6">
            {aboutData.subtitle}
          </p>
          <Link to="collections">
            <button className="bg-[#2D1A22] text-white text-sm px-6 py-2 rounded-full hover:bg-opacity-90 transition-all mb-10">
              EXPLORE OUR EXQUISITE RANGE
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 relative mb-10">
          <div className="rounded-tr-3xl rounded-br-3xl overflow-hidden p-4">
            <img
              src={aboutData.Image1}
              alt="Luxury jewelry"
              className="rounded-tr-3xl rounded-br-3xl"
            />
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-12 bg-white">
        <div className="w-full md:w-1/2 mb-8 md:mb-0  ">
          <h2 className="text-5xl md:text-3xl font-serif text-[#2D1A22] mb-4">
            Welcome to SLA
          </h2>
          <p className="text-lg text-gray-700 mb-4">{aboutData.description1}</p>
          <p className="text-lg text-gray-700 mb-6">{aboutData.description2}</p>

          <button className="bg-[#2D1A22] text-white text-base px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
            LEARN MORE ABOUT OUR EXQUISITE OFFERINGS
          </button>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="relative">
            <div className="absolute -top-0 -right-2 w-full h-full  bg-[#2D1A22] rounded-tr-3xl rounded-br-3xl"></div>
            <div className="flex justify-center  relative z-10 rounded-tr-3xl rounded-br-3xl overflow-hidden">
              <img
                src={aboutData.Image2}
                alt="Jewelry collection"
                width={600}
                height={400}
                className="rounded-tr-3xl rounded-br-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="px-4 md:px-16 py-12 bg-gray-50">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="bg-white overflow-hidden">
              <img
                src="/about/image_6.jpg"
                alt="Necklace with pendant"
                className="w-full"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 md:pl-12">
            <h2 className="text-5xl md:text-3xl font-serif text-[#2D1A22] mb-6">
              The Journey of Our Jewellery Brand
            </h2>
            <p className="text-base text-gray-700 mb-4">
              {aboutData.description3}
            </p>
          </div>
        </div>
        {/* ... rest of the static content remains unchanged ... */}
      </section>
    </main>
  );
}

export default About;
