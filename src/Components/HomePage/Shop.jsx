import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://jewelleryapp.onrender.com/home/get");
        const data = await response.json();
        setCategories(data.categories || []);
        setLoading(false);
      } catch (err) {
        setError("Failed to load categories.");
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="py-10 bg-white">
      {/* Title */}
      <h2 className="text-center text-2xl font-bold mb-2">Shop By Category</h2>
      <p className="text-center text-gray-600 mb-6">Our Everyday Pieces</p>

      {/* Loading State */}
      {loading && <p className="text-center text-gray-500">Loading categories...</p>}

      {/* Error Handling */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Categories Grid */}
      {!loading && !error && (
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6 max-w-screen-xl px-4">
            {categories.map((category) => (
              <div key={category._id} className="relative rounded-lg overflow-hidden shadow-lg group">
                {/* Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition duration-300" />

                {/* Text */}
                <div className="absolute bottom-4 left-4 text-white">
                <Link to="/productlist" >  <h3 className="text-lg font-semibold">{category.name}</h3> </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopByCategory;
