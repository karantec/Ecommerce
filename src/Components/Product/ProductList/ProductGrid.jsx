import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductGrid = () => {
  const [priceRange, setPriceRange] = useState(24000);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [karatFilter, setKaratFilter] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const categories = ["All", "Bracelets", "Earrings", "Necklaces", "Shop Earrings", "Wedding & Bridal"];
  const karats = ["All", "24K", "22K", "18K", "14K"];
  const productsPerPage = 9;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jewelleryapp.onrender.com/gold?category=${selectedCategory}&maxPrice=${priceRange}`
        );
        const data = await response.json();

        let filteredProducts = data;

        // Filter by search query
        if (searchQuery) {
          filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }

        // Filter by karat
        if (karatFilter !== "All") {
          filteredProducts = filteredProducts.filter(product => product.karat === parseInt(karatFilter));
        }

        // Sort products
        if (sortOrder === "lowToHigh") {
          filteredProducts.sort((a, b) => a.discountedPrice - b.discountedPrice);
        } else if (sortOrder === "highToLow") {
          filteredProducts.sort((a, b) => b.discountedPrice - a.discountedPrice);
        }

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory, priceRange, searchQuery, sortOrder, karatFilter]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="flex flex-col p-4 md:p-8">
      {/* Filters Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 space-y-4 md:space-y-0">
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/3"
        />

        {/* Sort by Price */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/5"
        >
          <option value="default">Sort by</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>

        {/* Filter by Karat */}
        <select
          value={karatFilter}
          onChange={(e) => setKaratFilter(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/5"
        >
          {karats.map((karat, index) => (
            <option key={index} value={karat === "All" ? "All" : karat.replace("", "")}>
              {karat}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0 md:pr-4">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-2 text-gray-600">
            {categories.map((category, index) => (
              <li
                key={index}
                className={`cursor-pointer hover:text-black ${
                  selectedCategory === category ? "font-bold text-black" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
          <h2 className="text-lg font-semibold mt-8 mb-4">Price</h2>
          <label className="text-gray-600">Range: ₹0 - ₹{priceRange}</label>
          <input
            type="range"
            min="0"
            max="24000"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full mt-2"
          />
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600">Showing {products.length} item(s)</span>
          </div>

          {loading ? (
            <p className="text-center text-gray-500">Loading products...</p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {currentProducts.map((product) => (
                  <div
                    key={product._id}
                    className="border rounded-lg p-4 relative cursor-pointer"
                    onClick={() => navigate(`/product/${product._id}`)}
                  >
                    <div className="relative mb-4">
                      <img
                        src={product.images[0] || "placeholder.png"}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded"
                      />
                      <span className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs rounded">
                        {product.karat}Gold
                      </span>
                    </div>
                    <h3 className="text-lg font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.description}</p>
                    <div className="text-gray-600 flex items-center space-x-2">
                      <span className="text-lg font-semibold text-black">₹{product.discountedPrice}</span>
                      <span className="line-through text-sm">
                        {product.price !== product.discountedPrice ? `₹${product.price}` : ""}
                      </span>
                      <span className="text-orange-500 text-sm font-semibold">
                        {((1 - product.discountedPrice / product.price) * 100).toFixed(0)}% OFF
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-6 space-x-2">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="text-sm mt-2">Page {currentPage}</span>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={indexOfLastProduct >= products.length}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
