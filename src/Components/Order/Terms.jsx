import React from "react";

const Terms = () => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen px-4 sm:px-6 lg:px-10 py-10 space-y-10">
      <div className="p-6 bg-white shadow-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-[#784421]">
          Terms & Conditions
        </h1>
        <div className="space-y-6 text-[16px] leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              1. Introduction
            </h2>
            <p>
              Welcome to Sri Laxmi Alankar! By accessing our website
              (www.srilaxmialankar.com), using our services, or purchasing our
              products, you agree to comply with and be bound by the following
              Terms & Conditions. Please read them carefully before proceeding.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              2. Eligibility
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>Users must be 18 years or older to place an order.</li>
              <li>
                If under 18, parental or guardian consent is required to use the
                website and place an order.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              3. Pricing & Payment
            </h2>
            <p>
              <strong>Domestic Orders (India):</strong>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Prices are quoted in INR and include GST.</li>
              <li>
                Prices may vary with market rates of gold, diamonds, and
                gemstones.
              </li>
              <li>Card charges may apply.</li>
            </ul>
            <p className="mt-2">
              <strong>Accepted Payment Methods:</strong>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Credit/Debit Cards (Visa, MasterCard, Rupay)</li>
              <li>UPI (Google Pay, PhonePe, Paytm)</li>
              <li>Net Banking</li>
              <li>Bank Transfer (for bulk or custom orders)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              4. PAN Card Requirement
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>Mandatory for orders above ₹2 lakhs.</li>
              <li>Name on PAN card must match the billing name.</li>
              <li>Submit PAN securely via email or website upload.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              5. Warranty & Authenticity
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>All products are BIS hallmarked.</li>
              <li>Diamonds/gemstones include an IGI certificate.</li>
              <li>Lifetime gold jewelry exchange based on current rates.</li>
              <li>Free lifetime polishing and cleaning services.</li>
              <li>Free repair for manufacturing defects within 6 months.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              6. Cancellation Policy
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>Orders can be cancelled before dispatch confirmation.</li>
              <li>Custom orders cannot be cancelled once processing starts.</li>
              <li>To cancel, call: 0621-2245632 or +91-9304907331</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              7. Privacy & Data Protection
            </h2>
            <p>
              Your personal data is securely stored and encrypted. We only share
              information with payment processors and shipping providers. Read
              our full Privacy Policy for details.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              8. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms are governed by Indian law. Any disputes will fall
              under the jurisdiction of Muzaffarpur, Bihar.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              9. Promotions & Offers
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>Promotions cannot be combined unless specified.</li>
              <li>Offer validity is subject to change without notice.</li>
              <li>
                Promo codes must be applied at checkout, not retroactively.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              10. Contact Information
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>Phone: +91 9304907331</li>
              <li>Tel: 0621-2245632</li>
              <li>Website: www.srilaxmialankar.com</li>
              <li>
                Store Address: Beside of Baba Garibnath Mandir, Muzaffarpur -
                842001
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#784421] mb-2">
              11. Changes to Terms & Conditions
            </h2>
            <p>
              Sri Laxmi Alankar reserves the right to update these Terms &
              Conditions at any time without prior notice. Please review them
              regularly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
