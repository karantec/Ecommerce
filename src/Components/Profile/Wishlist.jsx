import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(
    Array(8).fill({
      id: Math.random(),
      name: "DIAMOND CRISTIAL STUD",
      price: 3000,
      oldPrice: 5400,
      image:
        "https://manubhai.in/SocialMedia/post_artworks/DGBD00687.jpg", // Replace with actual image URL
    })
  );

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const moveToBag = (id) => {
    alert(`Moved item ${id} to bag`);
    removeFromWishlist(id);
  };

  return (
    <section className="min-h-screen bg-white px-4 py-6 sm:px-6 lg:px-12">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-[#3A1E1E]">
        My Wishlist
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="relative border rounded-lg shadow hover:shadow-lg transition"
          >
            {/* Remove Button */}
            <button
              onClick={() => removeFromWishlist(item.id)}
              className="absolute top-2 right-2 text-gray-700 hover:text-red-600 text-lg z-10"
            >
              <IoClose />
            </button>

            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 sm:h-52 md:h-56 object-cover rounded-t-lg"
            />

            {/* Product Details */}
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-sm text-center font-medium text-gray-800 mb-1">
                {item.name}
              </h3>

              <p className="text-lg font-semibold text-gray-900">
                ₹{item.price.toLocaleString()}
                <span className="line-through ml-2 text-sm text-gray-500">
                  ₹{item.oldPrice.toLocaleString()}
                </span>
              </p>
            </div>

            {/* Action Button */}
            <div className="px-4 pb-4">
              <button
                onClick={() => moveToBag(item.id)}
                className="w-full bg-[#3A1E1E] text-white py-2 rounded hover:bg-[#2a1313] transition"
              >
                Move to Bag
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wishlist;
