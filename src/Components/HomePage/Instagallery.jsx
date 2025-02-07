import React, { useEffect, useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import axios from 'axios';

const InstagramGallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://jewelleryapp.onrender.com/home/get');
        if (response.data && response.data.editorialImages) {
          setGalleryImages(response.data.editorialImages);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-8 mb-4">
          <div className="h-px bg-gray-300 w-24"></div>
          <div className="text-orange-500">
            <FaInstagram size={24} />
          </div>
          <div className="h-px bg-gray-300 w-24"></div>
        </div>
        <h2 className="text-2xl md:text-3xl text-orange-500 font-serif">
          Follow Us On Instagram
        </h2>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {galleryImages.map((imgSrc, index) => (
          <div
            key={index}
            className="aspect-square group relative overflow-hidden"
          >
            {/* Image */}
            <img
              src={imgSrc}
              alt={`Elegant jewelry piece ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <FaInstagram size={32} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Instagram Button */}
      <div className="text-center mt-12">
        <a
          href="https://www.instagram.com/yourprofile" // Replace with actual Instagram profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300"
        >
          <FaInstagram size={20} />
          <span>Follow on Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default InstagramGallery;
