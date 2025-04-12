import React, {useState, useEffect} from 'react';

const JewelryShowcase = () => {
  // const products = [
  //   {
  //     id: 1,
  //     name: 'DIAMOND CRISTRIAL STUD2',
  //     image: 'Spicial/10.png',
  //     price: 3000,
  //     originalPrice: 5000,
  //     discount: '50% OFF',
  //     isNew: true
  //   },
  //   {
  //     id: 2,
  //     name: 'DIAMOND CRISTRIAL STUD',
  //     image: 'Spicial/11.png',
  //     price: 3000,
  //     originalPrice: 5000,
  //     discount: '50% OFF',
  //     isNew: false
  //   },
  //   {
  //     id: 3,
  //     name: 'DIAMOND CRISTRIAL STUD',
  //     image: 'Spicial/12.png',
  //     price: 3000,
  //     originalPrice: 5000,
  //     discount: '50% OFF',
  //     isNew: false
  //   },
  //   {
  //     id: 4,
  //     name: 'DIAMOND CRISTRIAL STUD',
  //     image: 'Spicial/13.png',
  //     price: 3000,
  //     originalPrice: 5000,
  //     discount: '50% OFF',
  //     isNew: false
  //   }
  // ];

        const [products, setProducts] = useState([]);
      
        const fetchCategories = async () => {
          try {
            const response = await fetch(
              "https://jewelleryapp.onrender.com/gold"
            );
      
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
    <div className="container mx-auto px-2">
       <div className="text-center mb-8">
        {/* Icon and Line */}
        <div className="flex items-center justify-center space-x-4 mb-2">
          <div className="w-16 h-px bg-gray-300"></div>
          <img src="Category/icon.png" alt="Diamond Icon" className="w-6 h-6 inline-block" />

          <div className="w-16 h-px bg-gray-300"></div>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-garamond bg-gradient-to-r from-[#E66E06] to-[#6E3000] text-transparent bg-clip-text">
        Everyday Elegance
        </h2>


        {/* Subtitle */}
        <p className="text-[#7A3601] uppercase tracking-wide text-sm mt-1">
        DISCOVER ALL TRENDS
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* {products.map((product) => ( */}
        {products.sort(() => 0.5 - Math.random()).slice(0, 6).map((product) => (
          <div key={product._id} className="relative group bg-gray-50">
            <div className="relative">
              {product.isNew && (
                <span className="absolute top-2 left-2 bg-brown-600 text-white text-xs px-2 py-1 z-10">
                  NEW
                </span>
              )}
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-auto object-contain aspect-square"
              />
              <div className="absolute top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-2 mb-4 text-center">
              <h3 className="text-sm font-medium">{product.name}</h3>
              {/* <div className="flex items-center justify-center gap-2 mt-1">
                <span className="text-md font-bold">₹{product.priceDetails.goldPrice}</span>
                <span className="text-sm text-gray-500 line-through">
                  ₹{product.priceDetails.goldPrice}
                </span>
                <span className="text-sm text-red-600">{product?.discount || 0}</span>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((dot) => (
            <button
              key={dot}
              className={`w-2 h-2 rounded-full ${
                dot === 1 ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JewelryShowcase;