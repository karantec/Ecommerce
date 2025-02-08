import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: "sh2.png", // Replace with the actual GIF path
      title: "ALL INDIA SHIPPING",
      description: "All India Shipping is the Process of Importing",
    },
    {
      id: 2,
      icon: "sh1.png", // Replace with the actual GIF path
      title: "SECURED SERVICE",
      description: "Secured Services. Heavy Commercial/Industrial",
    },
    {
      id: 3,
      icon: "dl.png", // Replace with the actual GIF path
      title: "SECURED SERVICE",
      description: "Fast Delivery is a Fast Growing and Promising",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-28 items-center">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col  items-center text-center bg-white shadow-md border border-gray-200 rounded-lg p-6 hover:shadow-lg transition 
              ${index === 1 ? "mt-32" : ""}`} // Push middle card down
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="h-16 w-16 mb-4" // Adjusted size for GIFs
              />
              <h3 className="text-lg font-brown font-bold text-gray-800 mb-2 uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="text-[18px] font-bold font-brown">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
