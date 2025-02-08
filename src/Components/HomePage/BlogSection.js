import React from "react";

const BlogSection = () => {
  // Blog Data
  const blogs = [
    {
      id: 1,
      title: "For Elegance",
      description: "Involving Belonging Promotion Provision Can Be Consulted.",
      image: "Blog/15.png", // Replace with actual image path
    },
    {
      id: 2,
      title: "Product Superiority",
      description: "Ladyship graciously embraced the blessing as she met Sir with charm.",
      image: "Blog/16.png", // Replace with actual image path
    },
    {
      id: 3,
      title: "Skillfully Designed",
      description: "As cousins and men gathered, warmth filled the assembly.",
      image: "Blog/17.png", // Replace with actual image path
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto py-12 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        {/* Icon and Line */}
        <div className="flex items-center justify-center space-x-4 mb-2">
          <div className="w-16 h-px bg-gray-300"></div>
          <img src="Category/icon.png" alt="Diamond Icon" className="w-6 h-6 inline-block" />

          <div className="w-16 h-px bg-gray-300"></div>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-garamond bg-gradient-to-r from-[#E66E06] to-[#6E3000] text-transparent bg-clip-text">
        From Our Blogs
</h2>


        {/* Subtitle */}
        
      </div>


      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="relative group">
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto rounded-lg shadow-md transition-transform transform group-hover:scale-105"
            />
            {/* Overlay Button */}
            <button className="absolute bottom-4 left-4 flex items-center gap-2 text-white border border-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition">
              <span>➜</span> LEARN MORE
            </button>
            {/* Blog Content */}
            <div className="mt-4">
              <h3 className="text-lg  font-bold font-garamond">{blog.title}</h3>
              <p className=" font-bold text-sm mt-1 font-brown text-[#7A3838]">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
