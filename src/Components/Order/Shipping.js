import React from "react";

const Shipping = () => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen px-4 sm:px-8 lg:px-16 py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 lg:p-12 space-y-10">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#784421] mb-6 border-b border-[#eee] pb-4">
            Shipping & Return Policy
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Sri Laxmi Alankar, every piece of jewelry reflects tradition,
            precision, and trust. Our Shipping and Return Policy ensures a
            smooth, secure, and transparent experience for customers across
            India.
          </p>
        </div>

        {/* Shipping Policy */}
        <Section title="Shipping Policy">
          <SubSection title="Order Confirmation & Processing">
            <List
              items={[
                "Confirmation sent via email or SMS after placing the order.",
                "Orders are processed within 24 to 48 business hours (excluding Sundays/public holidays).",
                "All items are inspected and securely packaged before dispatch.",
              ]}
            />
          </SubSection>

          <SubSection title="Delivery Timeline">
            <List
              items={[
                "Standard Delivery: 5 to 7 days post-dispatch (location-dependent).",
                "Express Delivery: Available in select cities at an extra cost (contact support to check availability).",
                "Free Shipping on orders above ₹1,00,000.",
              ]}
            />
          </SubSection>

          <SubSection title="Tracking">
            <p className="text-gray-700">
              You’ll receive a tracking number once your order has been shipped,
              so you can monitor delivery in real-time.
            </p>
          </SubSection>
        </Section>

        {/* Custom Orders */}
        <Section title="Custom Order Shipping">
          <List
            items={[
              "Requires 25% advance payment at order confirmation.",
              "Delivery takes 5 to 10 days based on design complexity and material availability.",
              "Customers will receive updates at every production stage.",
            ]}
          />
        </Section>

        {/* Return & Exchange */}
        <Section title="Return Policy">
          <List
            items={[
              "No returns for change of mind, personal preferences, or minor variations in color/weight.",
              "Customized, engraved, resized, or altered items are non-returnable.",
            ]}
          />
        </Section>

        {/* Cancellation */}
        <Section title="Cancellation Policy">
          <List
            items={[
              "Orders can only be canceled if they haven’t been shipped.",
              "Contact our support team immediately to cancel before dispatch.",
              "Orders cannot be modified or canceled once shipped.",
            ]}
          />
        </Section>

        {/* Contact */}
        <Section title="Contact Us">
          <List
            items={[
              "Phone: +91-9304907331",
              "Store Address: Beside Garibnath Mandir, Muzaffarpur, Bihar – 842001",
              "Support Hours: 10:00 AM – 7:00 PM (Closed on Sundays)",
              "Website: www.srilaxmialankar.com",
            ]}
          />
        </Section>
      </div>
    </div>
  );
};

// Reusable Components
const Section = ({ title, children }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold text-[#784421]">{title}</h2>
    <div className="space-y-4">{children}</div>
  </div>
);

const SubSection = ({ title, children }) => (
  <div>
    <h3 className="text-lg font-medium text-[#5a3720] mb-2">{title}</h3>
    <div className="text-gray-700 text-[16px] leading-relaxed">{children}</div>
  </div>
);

const List = ({ items }) => (
  <ul className="list-disc pl-5 text-gray-700 space-y-2">
    {items.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
);

export default Shipping;
