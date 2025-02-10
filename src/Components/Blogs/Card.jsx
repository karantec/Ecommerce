import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md"; // Make sure you have react-icons installed

const GallerySection = () => {
  // JSON data directly in the file
  const blogData = [
    {
      
      "date": "1 Jan 2023",
      "title": "24K Gold (99.9% Pure)",
      "description": "Soft, primarily used for coins & bars, not suitable for jewelry.",
      "image": "https://www.iconicjewelry.com/app/uploads/2023/05/9da86477-225c-4029-9cb0-4a846ba36cea.jpeg"
    },
    {
      
      "date": "1 Jan 2023",
      "title": "22K Gold (91.6% Pure)",
      "description": "Ideal for traditional jewelry, strong yet malleable.",
      "image": "https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/f7MqkJuik2fnvpnYgRWYYWq7npiJMnJ2m1AeATuu.jpeg"
    },
    {
      
      "date": "1 Jan 2023",
      "title": "18K Gold (75% Pure)",
      "description": "A mix of gold & alloys, perfect for diamond and gemstone jewelry.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo_Wx33L1BZpz8Ce_4N3gDpJicp6nyaLFIrA&s"
    },
    {
       
        "title": "14K Gold (58.5% Pure)",
        "description": "Durable and affordable, commonly used for lightweight designs.?",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00gGVwuUGLnlmXxcU0mNHdS7MHBvFSN_34Q&s"
      },
      
      
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Related Blogs</h1>
            
          </div>
        </div>

        {/* Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((blog, index) => (
            <div key={index} className="p-6 rounded-lg ">
              <img className="h-40 w-full object-cover object-center mb-6" src={blog.image} alt={blog.title} />
              <p className='text-red-800 font-bold'>{blog.author} <span className="inline-block h-2 w-2 bg-red-800 rounded-full"></span> {blog.date}</p>
              {/* Title with Arrow */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg text-gray-900 font-medium title-font">{blog.title}</h2>
                <MdOutlineArrowOutward className="text-black text-xl" />
              </div>
              <p className="leading-relaxed font-brown text-[18px] font-bold">{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
