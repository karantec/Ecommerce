import React, { useState, useEffect } from "react";

const FeatureProducts = () => {
  // const products = [
  //   {
  //     id: 1,
  //     name: 'DIAMOND CRISTRIAL STUD',
  //     image: 'Feature/2.png',
  //     price: 5000,
  //     discountedPrice: 3000,
  //     discount: '50% OFF'
  //   },
  //   {
  //     id: 2,
  //     name: 'DIAMOND CRISTRIAL STUD',
  //     image: 'Feature/3.png',
  //     price: 5000,
  //     discountedPrice: 3000,
  //     discount: '50% OFF'
  //   },
  //   {
  //     id: 3,
  //     name: 'DIAMOND CRISTRIAL STUD',
  //     image: 'Feature/4.png',
  //     price: 5000,
  //     discountedPrice: 3000,
  //     discount: '50% OFF'
  //   },
  //   {
  //     id: 4,
  //     name: 'DIAMOND CRISTRIAL STUD',
  //     image: 'Feature/5.png',
  //     price: 5000,
  //     discountedPrice: 3000,
  //     discount: '50% OFF'
  //   },
  //   {
  //     id: 5,
  //     name: 'DIAMOND CRISTRIAL STUD',
  //     image: 'Feature/6.png',
  //     price: 5000,
  //     discountedPrice: 3000,
  //     discount: '50% OFF'
  //   },
  //   {
  //     id: 6,
  //     name: 'DIAMOND CRISTRIAL STUD',
  //     image: 'Feature/7.png',
  //     price: 5000,
  //     discountedPrice: 3000,
  //     discount: '50% OFF'
  //   },
  //   {
  //     id: 7,
  //     name: 'DIAMOND CRISTRIAL STUD',
  //     image: 'Feature/8.png',
  //     price: 5000,
  //     discountedPrice: 3000,
  //     discount: '50% OFF'
  //   },
  //   {
  //     id: 8,
  //     name: 'DIAMOND CRISTRIAL STUD',
  //     image: 'Feature/9.png',
  //     price: 5000,
  //     discountedPrice: 3000,
  //     discount: '50% OFF'
  //   }
  // ];

  const [products, setProducts] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://jewelleryapp.onrender.com/gold");

      const data = await response.json();

      setProducts(data.products);
    } catch (error) {
      console.error(error);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto py-10 px-2">
      <div className="text-center mb-6">
        {/* Icon and Line */}
        <div className="flex items-center justify-center space-x-4 mb-2">
          <div className="w-16 h-px bg-gray-300"></div>
          <img src="Category/icon.png" alt="Diamond Icon" className="w-6 h-6" />
          <div className="w-16 h-px bg-gray-300"></div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-garamond bg-gradient-to-r from-[#E66E06] to-[#6E3000] text-transparent bg-clip-text">
          Feature Products
        </h2>

        {/* Subtitle */}
      </div>

      <div className="flex flex-col lg:flex-row gap-2">
        {/* Banner Section */}
        <div className="lg:w-1/4">
          <div className="relative bg-black h-full">
            <img
              src="sla.jpg"
              alt="New Collection"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:w-3/4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products
              .sort(() => 0.5 - Math.random())
              .slice(0, 6)
              .map((product) => (
                <div
                  key={product.id}
                  className=" rounded-xl shadow  transition duration-300 overflow-hidden"
                >
                  {/* Image */}
                  <div className="aspect-square">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Name */}
                  <div className="text-center py-3 px-2">
                    <h3 className="font-Brown uppercase text-sm text-gray-800">
                      {product.name}
                    </h3>

                    {/* Uncomment if you want price and discount */}
                    {/* <div className="flex items-center justify-center gap-1 mt-1">
            <span className="text-[18px] font-medium text-gray-900">
              ₹{product.priceDetails.goldPrice}
            </span>
            <span className="text-sm text-gray-400 line-through">
              ₹{product.priceDetails.goldPrice}
            </span>
            <span className="text-sm text-red-500">{product.discount}</span>
          </div> */}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
