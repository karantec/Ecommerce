import React from "react";

const InstagramGallery = () => {
  const images = [
    "/Instagram/31.png", // Replace with actual image paths
    "/Instagram/32.png",
    "/Instagram/33.png",
    "/Instagram/34.png",
    "/Instagram/34.png",
    "/Instagram/35.png",
    "/Instagram/36.png",
    "/Instagram/37.png",
    "/Instagram/38.png",
    "/Instagram/39.png",
    "/Instagram/40.png",
    "/Instagram/41.png",
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-800 mb-6">
        Follow Us On Instagram
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={image}
              alt={`Instagram post ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramGallery;
