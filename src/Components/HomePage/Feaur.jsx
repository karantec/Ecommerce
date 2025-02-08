import React from "react";

const FeatureProducts = () => {
  const products = [
    {
      id: 1,
      name: 'DIAMOND CRISTRIAL STUD',
      image: 'Feature/2.png',
      price: 5000,
      discountedPrice: 3000,
      discount: '50% OFF'
    },
    {
      id: 2,
      name: 'DIAMOND CRISTRIAL STUD',
      image: 'Feature/3.png',
      price: 5000,
      discountedPrice: 3000,
      discount: '50% OFF'
    },
    {
      id: 3,
      name: 'DIAMOND CRISTRIAL STUD',
      image: 'Feature/4.png',
      price: 5000,
      discountedPrice: 3000,
      discount: '50% OFF'
    },
    {
      id: 4,
      name: 'DIAMOND CRISTRIAL STUD',
      image: 'Feature/5.png',
      price: 5000,
      discountedPrice: 3000,
      discount: '50% OFF'
    },
    {
      id: 5,
      name: 'DIAMOND CRISTRIAL STUD',
      image: 'Feature/6.png',
      price: 5000,
      discountedPrice: 3000,
      discount: '50% OFF'
    },
    {
      id: 6,
      name: 'DIAMOND CRISTRIAL STUD',
      image: 'Feature/7.png',
      price: 5000,
      discountedPrice: 3000,
      discount: '50% OFF'
    },
    {
      id: 7,
      name: 'DIAMOND CRISTRIAL STUD',
      image: 'Feature/8.png',
      price: 5000,
      discountedPrice: 3000,
      discount: '50% OFF'
    },
    {
      id: 8,
      name: 'DIAMOND CRISTRIAL STUD',
      image: 'Feature/9.png',
      price: 5000,
      discountedPrice: 3000,
      discount: '50% OFF'
    }
  ];

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
              src="Feature/20.png" 
              alt="New Collection"
              className="w-full h-full object-cover opacity-50"
            />
           
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:w-3/4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-50">
                <div className="aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="text-center py-2">
                  <h3 className="font-brown text-uppercase">{product.name}</h3>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <span className="text-[25px] ">₹{product.discountedPrice.toLocaleString()}</span>
                    <span className="text-[15px] text-gray-400 line-through">₹{product.price.toLocaleString()}</span>
                    <span className="text-[15px] text-red-500">{product.discount}</span>
                  </div>
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