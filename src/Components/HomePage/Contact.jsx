import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-white py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Contact Us</h3>
            <p className="text-sm text-gray-600 mb-2">
              Working Hours Monday to Saturday <br />
              9:00am to 6:30pm
            </p>
            <p className="text-sm text-gray-800 font-medium">+91-9999999999</p>
          </div>

          {/* Signup Form */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-orange-600 mb-2">
              Let's Get in Touch
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
            <form className="flex items-center w-full max-w-md">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-orange-200"
              />
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-2 rounded-r-lg text-sm font-medium hover:bg-orange-700 transition"
              >
                SIGNUP
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              I Accept Privacy Policy and Cookies Policy
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Follow Us On Social Media
            </h3>
            <div className="flex space-x-4 mt-2">
              {/* Replace icons with actual links */}
              <a href="#" className="text-gray-600 hover:text-orange-600">
                <i className="fab fa-instagram"></i> {/* Instagram */}
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-600">
                <i className="fab fa-facebook"></i> {/* Facebook */}
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-600">
                <i className="fab fa-youtube"></i> {/* YouTube */}
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-600">
                <i className="fab fa-twitter"></i> {/* Twitter */}
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-600">
                <i className="fab fa-pinterest"></i> {/* Pinterest */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;