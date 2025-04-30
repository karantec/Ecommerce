import React from "react";
import contact from "../../assets/contact.jpg";

const Cont = () => {
  return (
    <div>
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
            {/* Contact Us Section */}
            <div>
              <div className="group w-full h-full">
                <div className="relative h-full">
                  <img
                    src={contact}
                    alt="Contact Us"
                    className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
                  />
                  <h1 className="font-manrope text-white text-3xl sm:text-4xl font-bold leading-10 absolute top-6 sm:top-11 left-6 sm:left-11">
                    Contact us
                  </h1>
                  <div className="absolute bottom-0 w-full px-4 sm:px-5 lg:px-11 py-6">
                    <div className="bg-white rounded-lg p-6">
                      {/* Contact Information */}
                      <a
                        href="tel:4706011911"
                        className="flex items-center mb-6"
                      >
                        <h5 className="text-black text-base sm:text-lg font-normal leading-6 ml-4 sm:ml-5">
                          470-601-1911
                        </h5>
                      </a>
                      <a
                        href="mailto:Pagedone1234@gmail.com"
                        className="flex items-center mb-6"
                      >
                        <h5 className="text-black text-base sm:text-lg font-normal leading-6 ml-4 sm:ml-5">
                          Pagedone1234@gmail.com
                        </h5>
                      </a>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=654+Sycamore+Avenue+Meadowville+WA+76543"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <h5 className="text-black text-base sm:text-lg font-normal leading-6 ml-4 sm:ml-5">
                          654 Sycamore Avenue, Meadowville, WA 76543
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-gray-50 p-5 sm:p-8 lg:p-11 lg:rounded-r-2xl rounded-2xl">
              <h2 className="text-yellow-500 font-bold font-manrope text-2xl sm:text-4xl leading-10 mb-8 sm:mb-11">
                Send Us A Message
              </h2>
              <input
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-sm sm:text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-6 sm:mb-10"
                placeholder="Name"
              />
              <input
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-sm sm:text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-6 sm:mb-10"
                placeholder="Email"
              />
              <input
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-sm sm:text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-6 sm:mb-10"
                placeholder="Phone"
              />
              <textarea
                className="w-full h-24 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-sm sm:text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none p-4 mb-6 sm:mb-10"
                placeholder="Message"
              />
              <button className="w-full h-12 text-white text-sm sm:text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-yellow-500 bg-yellow-600 shadow-sm">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cont;
