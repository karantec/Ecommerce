import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen px-4 sm:px-6 lg:px-10 py-10 space-y-10">
      <div className="p-6 bg-white shadow-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-[#784421]">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-[16px] leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              Overview
            </h2>
            <p>
              SriLaxmi Alankar is committed to protecting the privacy and
              security of our customers. This Privacy Policy outlines how we
              collect, use, store, and disclose your personal information when
              you interact with us through our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              Information We Collect
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>Full Name</li>
              <li>Contact Information (Email, Phone Number)</li>
              <li>Billing and Shipping Address</li>
              <li>
                Payment Information (processed via secure third-party services)
              </li>
              <li>Purchase History</li>
              <li>Communication records (for customer support)</li>
            </ul>
            <p className="mt-2">
              We also collect non-personal data like browser type, IP address,
              device information, and cookies for analytics and service
              improvement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              Use of Information
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>Processing and fulfilling your orders</li>
              <li>Communicating order updates and customer support</li>
              <li>Enhancing your shopping experience</li>
              <li>
                Sending promotional offers and newsletters (only with consent)
              </li>
              <li>Internal analysis and website improvement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              Information Sharing
            </h2>
            <p>
              We do not sell, rent, or trade your personal information with
              third parties for marketing purposes. Information may be shared
              with:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Delivery partners to ensure successful shipping</li>
              <li>Payment processors for transaction completion</li>
              <li>Legal authorities if required by law or to prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              Data Security
            </h2>
            <p>
              We implement advanced security protocols and encryption techniques
              to ensure that your personal data is protected against
              unauthorized access, misuse, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              Cookies
            </h2>
            <p>
              Our website uses cookies to personalize your experience and
              analyze traffic. You can control cookie settings through your
              browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              Your Rights
            </h2>
            <p>
              You may request to review, correct, or delete your personal
              information at any time by contacting our support team. You can
              also opt out of promotional communications by clicking the
              "unsubscribe" link in our emails.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
