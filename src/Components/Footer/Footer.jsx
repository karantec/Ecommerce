import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col h-96">
      <div className="flex-grow"></div>

      <footer className="text-gray-600 bg-[#E9F1ED] body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 flex items-center text-center md:text-left gap-4">
            <img
              src="logone.png"
              alt="Hirapanna Jewellers"
              className="w-44 h-18"
            />
            <p className="text-2xl font-garmond text-black">
              Shri Laxmi Alankar is more than a jewelry store—it is a
              destination for those who cherish the art of fine jewelry.
            </p>
          </div>

          <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left flex flex-row justify-between">
            <div className="w-full md:w-1/4 px-4">
              <h2 className="title-font text-md uppercase font-bold text-[#000000] text-sm mb-3">
                COSTUME
              </h2>
              <nav className="list-none mb-10">
                <li className="mb-3">
                  <a
                    href="/blogs"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Our Blogs
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/order-history"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Order History
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/track-order"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Track Your Order
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/shipping-return"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Shipping & Return
                  </a>
                </li>
              </nav>
            </div>

            <div className="w-full md:w-1/4 px-4">
              <h2 className="title-font font-bold text-[#000000] text-sm mb-3">
                About Us
              </h2>
              <nav className="list-none mb-10">
                <li className="mb-3">
                  <a href="/faq" className="text-gray-600 hover:text-gray-800">
                    FAQ
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/products"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Our Products
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/terms"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/privacy-policy"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/shipping-policy"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Shipping & Returns Policy
                  </a>
                </li>
              </nav>
            </div>

            <div className="w-full md:w-1/4 px-4">
              <h2 className="title-font font-bold text-[#000000] text-sm mb-3">
                CATALOG
              </h2>
              <nav className="list-none mb-10">
                <li className="mb-3">
                  <a
                    href="/earrings"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Earrings
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/pendant"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Pendant
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/rings"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Rings
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/chain"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Chain
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="/bangles"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Bangles
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 py-4">
          <div className="container mx-auto sm:justify-center items-center px-5 flex flex-wrap items-center justify-between">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2023 Sri Laxmi Alankar Jewellery Company Limited. All rights
              reserved.
            </p>
            <div className="flex items-center justify-center space-x-4 mt-4 ml-8 md:mt-0">
              <img
                src="stripe.png"
                alt="Stripe"
                className="w-12 h-8 sm:w-10 sm:h-6 object-contain mb-2"
              />
              <img
                src="american.png"
                alt="American Express"
                className="w-12 h-8 sm:w-10 sm:h-6 object-contain mb-2"
              />
              <img
                src="paypal.jpg"
                alt="PayPal"
                className="w-12 h-8 sm:w-10 sm:h-6 object-contain mb-2"
              />
              <img
                src="visa.png"
                alt="Visa"
                className="w-12 h-8 sm:w-10 sm:h-6 object-contain mb-2"
              />
              <img
                src="applepy.png"
                alt="Apple Pay"
                className="w-12 h-8 sm:w-10 sm:h-6 object-contain mb-2"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
