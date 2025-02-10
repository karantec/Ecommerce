import React from "react";
import { BiBarChart } from "react-icons/bi";
import {
  FaShare,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import StyledSection from "./StyleSection";

const Item = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 min-h-screen gap-4">
      {/* Left Sidebar - 10% */}
      <aside className="hidden lg:block lg:col-span-1 bg-gray-50">
        <div className="sticky h-96 mt-4 flex items-center justify-center">
          {/* Social Metrics */}
          <div className="flex flex-col justify-center items-center space-y-6 text-gray-600">
            {/* Views */}
            <div className="flex flex-col items-center space-y-1">
              <BiBarChart className="w-8 h-8 text-black font-bold" />
              <span className="text-xs text-black">views</span>
              <span className="text-sm text-black font-bold">1.6K</span>
            </div>

            {/* Shares */}
            <div className="flex flex-col items-center space-y-1">
              <FaShare className="w-4 h-4" />
              <span className="text-xs">shares</span>
              <span className="text-sm font-medium">996K</span>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center space-y-1 cursor-pointer hover:text-blue-600">
              <FaFacebook className="w-4 h-4" />
              <span className="text-sm font-medium">125</span>
            </div>
            <div className="flex flex-col items-center space-y-1 cursor-pointer hover:text-blue-400">
              <FaTwitter className="w-4 h-4" />
              <span className="text-sm font-medium">48</span>
            </div>
            <div className="flex flex-col items-center space-y-1 cursor-pointer hover:text-red-600">
              <FaPinterest className="w-4 h-4" />
              <span className="text-sm font-medium">425</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content - 60% */}
      <main className="lg:col-span-6 p-4 bg-white">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-8 mx-auto">
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="p-4 w-full">
                <p className="leading-relaxed text-[20px] text-black">
                  At{" "}
                  <span className="font-brown font-bold ">
                    Shri Laxmi Alankar,
                  </span>{" "}
                  we take pride in offering a stunning range of jewelry that
                  caters to every occasion, taste, and style. Whether you're
                  looking for an elegant everyday piece or a dazzling statement
                  accessory, our collections are thoughtfully designed to bring
                  timeless beauty and sophistication into your life.
                </p>
                <p className="leading-relaxed text-[20px] mt-4 text-black">
                  At{" "}
                  <span className="font-brown font-bold ">
                    Shri Laxmi Alankar,
                  </span>{" "}
                  we understand that purchasing jewelry is not just about
                  beauty—it's also about trust. That’s why we uphold the highest
                  standards of purity, authenticity, and certification to give
                  you complete peace of mind with every purchase
                </p>
              </div>
              <div className="flex items-center justify-center bg-gray-50 p-4 rounded-lg">
                <div className="border-l-4 border-gray-300 pl-6">
                  <span className="text-7xl text-gray-300 font-serif">
                    &ldquo;
                  </span>
                  <p className="text-4xl font-medium uppercase leading-tight tracking-wide text-black">
                    Choosing the Right Jewelry for Your Wedding.
                    <br />
                    Your Trusted Destination for Timeless Jewelry
                    <br />
                    Best Jewelry Gift Ideas for Every Occasion
                  </p>
                </div>
              </div>
              <p className="leading-relaxed text-[20px] text-black">
                At Shri Laxmi Alankar, we are honored to be a part of your most
                precious moments. Whether you’re celebrating a wedding,
                anniversary, birthday, or any milestone, we are here to provide
                you with exquisite jewelry that lasts a lifetime
              </p>
              <p className="leading-relaxed text-[20px] text-black">
                Jewelry at Shri Laxmi Alankar isn’t just about beauty—it’s about
                meaning. Every piece tells a story, whether it’s a wedding set
                that symbolizes eternal love or a simple pendant that marks a
                personal achievement
              </p>
            </div>
          </div>
        </section>
        <StyledSection />
      </main>

      {/* Right Sidebar - 30% */}
      <aside className="lg:col-span-3 bg-gray-50 p-4">
        <div className="sticky top-4 space-y-6">
          {/* Follow Us Section */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 mt-6 uppercase text-center">
              Follow Us
            </h3>
            <div className="flex text-gray-600 space-x-10 justify-center">
              <div className="flex flex-col items-center">
                <FaFacebook className="w-6 h-6" />
                <span className="text-xs">10K</span>
              </div>
              <div className="flex flex-col items-center">
                <FaTwitter className="w-6 h-6" />
                <span className="text-xs">65K</span>
              </div>
              <div className="flex flex-col items-center">
                <FaInstagram className="w-6 h-6" />
                <span className="text-xs">45K</span>
              </div>
              <div className="flex flex-col items-center">
                <FaPinterest className="w-6 h-6" />
                <span className="text-xs">69K</span>
              </div>
              <div className="flex flex-col items-center">
                <FaYoutube className="w-6 h-6" />
                <span className="text-xs">69K</span>
              </div>
            </div>
          </div>

          {/* Subscription Section */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="text-sm font-medium text-gray-900 mb-2">
              Subscription
            </h4>
            <p className="text-md text-black mb-4">
              Subscribe to our newsletter and receive a selection of cool
              articles every week.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <button className="w-full bg-orange-500 text-white text-sm font-medium py-2 rounded">
              Subscribe
            </button>
            <div className="mt-4 text-md text-gray-600  justify-end">
              <label className="flex items-start ">
                <input type="checkbox" className="mt-1 border-gray-300" />
                <span className="ml-2">
                  By checking this box, you confirm that you have read and are
                  agreeing to our terms of use regarding the storage of the data
                  submitted through this form.
                </span>
              </label>
            </div>
          </div>

          {/* Latest Articles Section */}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">The Latest</h2>
            <div className="space-y-6">
              <div
                className="relative p-4 bg-cover bg-center text-white rounded-md h-36 flex items-end"
                style={{ backgroundImage: "url('https://content.jdmagicbox.com/comp/arrah/c9/9999p6182.6182.151201150650.g7c9/catalogue/sri-alankar-jewellers-arrah-12rqdrzq8l.jpg')" }}
              >
                <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
                <div className="relative z-10">

                  <h3 className="font-semibold text-lg">
                  BIS (Bureau of Indian Standards) Hallmarking is the official certification
that verifies the purity and authenticity of gold jewelry in India. Every
gold piece at Shri Laxmi Alankar is BIS-hallmarked, ensuring you
receive nothing but genuine, high-quality gold.
                  </h3>
                  <div className="flex justify-center items-center text-sm mt-2">
                    <span>June 21, 2022</span>
                    <span className="mx-2">•</span>
                    <span>2 minute read</span>
                  </div>
                </div>
              </div>

              {/* Additional Articles */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                  Confirms government-approved purity standards
                  </h3>
                  <div className="text-sm justify-center  text-gray-600 mt-1">
                    <span>June 21, 2022</span>
                    <span className="mx-2">•</span>
                    <span>2 minute read</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                  Indicates the gold’s fineness (e.g., 22K, 18K, 14K).
                  </h3>
                  <div className="text-sm justify-center   text-gray-600 mt-1">
                    <span>June 21, 2022</span>
                    <span className="mx-2">•</span>
                    <span>2 minute read</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                  Shows where the gold
                  was tested and certified
                  </h3>
                  <div className="text-sm items-center  text-gray-600 mt-1">
                    <span className="text-center">June 21, 2022</span>
                    <span className="mx-2">•</span>
                    <span>2 minute read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Item;
