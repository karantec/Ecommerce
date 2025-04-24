import React from "react";

const Shipping = () => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen px-4 sm:px-6 lg:px-10 py-10 space-y-10">
      <div className="p-6 bg-white shadow-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-[#784421]">
          Shipping & Return Policy
        </h1>
        <div className="space-y-6 text-[16px] leading-relaxed">
          <section>
            <p>
              At Sri Laxmi Alankar, every piece of jewelry reflects tradition,
              precision, and trust. Our Shipping and Return Policy ensures a
              smooth, secure, and transparent experience for customers across
              India.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              Shipping Policy
            </h2>
            <h3 className="font-medium">Order Confirmation & Processing</h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                Confirmation sent via email or SMS after placing the order.
              </li>
              <li>
                Orders are processed within 24 to 48 business hours (excluding
                Sundays/public holidays).
              </li>
              <li>
                All items are inspected and securely packaged before dispatch.
              </li>
            </ul>

            <h3 className="font-medium mt-4">Delivery Timeline</h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                Standard Delivery: 5 to 7 days post-dispatch
                (location-dependent).
              </li>
              <li>
                Express Delivery: Available in select cities at an extra cost
                (contact support to check availability).
              </li>
              <li>Free Shipping on orders above ₹1,00,000.</li>
            </ul>

            <h3 className="font-medium mt-4">Tracking</h3>
            <p>
              You’ll receive a tracking number once your order has been shipped,
              so you can monitor delivery in real-time.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              Custom Order Shipping
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>Requires 25% advance payment at order confirmation.</li>
              <li>
                Delivery takes 5 to 10 days based on design complexity and
                material availability.
              </li>
              <li>Customers will receive updates at every production stage.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              Return & Exchange Policy
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>
                No returns for change of mind, personal preferences, or minor
                variations in color/weight.
              </li>
              <li>
                Customized, engraved, resized, or altered items are
                non-returnable.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              Cancellation Policy
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>Orders can only be canceled if they haven’t been shipped.</li>
              <li>
                Contact our support team immediately to cancel before dispatch.
              </li>
              <li>Orders cannot be modified or canceled once shipped.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              Contact Us
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>Phone: +91-9304907331</li>
              <li>
                Store Address: Beside Garibnath Mandir, Muzaffarpur, Bihar –
                842001
              </li>
              <li>Support Hours: 10:00 AM – 7:00 PM (Closed on Sundays)</li>
              <li>Website: www.srilaxmialankar.com</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
