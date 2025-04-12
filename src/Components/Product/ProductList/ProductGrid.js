import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [caratPrices, setCaratPrices] = useState({});
  const [calculatedPrices, setCalculatedPrices] = useState({});
  const [wsStatus, setWsStatus] = useState("Initializing...");
  const [usePolling, setUsePolling] = useState(false);
  const socketRef = useRef(null);
  const pollingIntervalRef = useRef(null);
  const navigate = useNavigate();

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  // Filter states
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCarat, setSelectedCarat] = useState("all");

  // Memoize the price calculation function
  const calculateProductPrices = useCallback((productsList, prices) => {
    console.log("Calculating prices with gold prices:", prices);
    if (!Object.keys(prices).length || !productsList.length) return;

    const newPrices = {};
    productsList.forEach((product) => {
      try {
        // Use consistent property names
        const netWeight = product.netWeight || 0;
        const carat = product.carat || "";
        const makingCharge = parseFloat(product.makingcharge) || 0;

        if (netWeight && carat && !isNaN(netWeight)) {
          const caratKey = carat.toUpperCase();
          const goldPricePerGram = parseFloat(prices[caratKey]);

          // Make sure we have a valid gold price
          if (!goldPricePerGram || isNaN(goldPricePerGram)) {
            console.warn(
              `Invalid gold price for ${caratKey}:`,
              prices[caratKey]
            );
            return;
          }

          // Calculate gold price based on weight and current rate
          const goldPrice = netWeight * goldPricePerGram;

          // Calculate making charge amount (as percentage of gold price)
          const makingChargeAmount = (goldPrice * makingCharge) / 100;

          // Calculate total price
          const totalPrice = goldPrice + makingChargeAmount;

          // Store the calculated price with detailed breakdown for debugging
          newPrices[product._id] = {
            total: totalPrice.toFixed(2),
            breakdown: {
              goldPrice: goldPrice.toFixed(2),
              makingChargeAmount: makingChargeAmount.toFixed(2),
              netWeight,
              pricePerGram: goldPricePerGram,
              makingChargePercentage: makingCharge,
            },
          };

          console.log(
            `Price calculated for ${product.name}: ₹${totalPrice.toFixed(2)}`
          );
        } else {
          console.warn("Missing required product data for price calculation:", {
            netWeight,
            carat,
            makingCharge,
            productId: product._id,
          });
        }
      } catch (err) {
        console.error("Error calculating price for product:", product._id, err);
      }
    });

    console.log("New calculated prices:", newPrices);
    setCalculatedPrices(newPrices);
  }, []);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://jewelleryapp.onrender.com/gold"
      );
      console.log("Fetched products:", response.data);

      let productsData = [];
      if (
        response.data &&
        response.data.products &&
        Array.isArray(response.data.products)
      ) {
        productsData = response.data.products;
      } else if (Array.isArray(response.data)) {
        productsData = response.data;
      } else {
        setError("Unexpected data format received");
      }

      setProducts(productsData);
      setFilteredProducts(productsData);

      // If we already have gold prices, calculate product prices immediately
      if (Object.keys(caratPrices).length) {
        calculateProductPrices(productsData, caratPrices);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch products");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      setCategoriesLoading(true);
      const response = await axios.get(
        "https://jewelleryapp.onrender.com/category/getAllCategory"
      );
      console.log("Fetched categories:", response.data);

      if (response.data && Array.isArray(response.data)) {
        // Extract category titles from the response
        const categoryList = response.data
          .map((cat) => cat.title || cat.name || cat.categoryName)
          .filter(Boolean);
        setCategories(categoryList);
      } else {
        console.warn("Unexpected category data format");
        // Fallback: extract categories from products
        const uniqueCategories = [
          ...new Set(products.map((product) => product.category)),
        ].filter(Boolean);
        setCategories(uniqueCategories);
      }
    } catch (err) {
      console.error("Failed to fetch categories:", err);
      // Fallback: extract categories from products
      const uniqueCategories = [
        ...new Set(products.map((product) => product.category)),
      ].filter(Boolean);
      setCategories(uniqueCategories);
    } finally {
      setCategoriesLoading(false);
    }
  };
  const fetchGoldPrices = async () => {
    try {
      const response = await axios.get(
        "https://jewelleryapp.onrender.com/today-price/PriceRouting"
      );
      console.log("Fetched gold prices:", response.data);

      if (Array.isArray(response.data) && response.data.length > 0) {
        // Convert array to object with Carat as key and TodayPricePerGram as value
        const prices = {};
        response.data.forEach((item) => {
          prices[item.Carat] = item.TodayPricePerGram;
        });

        setCaratPrices(prices);
        return prices;
      }
      return null;
    } catch (err) {
      console.error("Failed to fetch gold prices:", err);
      return null;
    }
  };

  // Apply filters when filter selections change
  useEffect(() => {
    if (products.length === 0) return;

    let filtered = [...products];

    // Apply category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Apply carat filter
    if (selectedCarat !== "all") {
      filtered = filtered.filter((product) => {
        const productCarat = (product.carat || "").toUpperCase();
        return productCarat === selectedCarat;
      });
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategory, selectedCarat, products]);

  // Setup polling as a fallback for WebSocket
  const setupPolling = useCallback(() => {
    console.log("Setting up polling for gold price updates");
    setUsePolling(true);
    setWsStatus("Using polling (30s interval)");

    // Clear any existing interval
    if (pollingIntervalRef.current) {
      clearInterval(pollingIntervalRef.current);
    }

    // Fetch immediately and then set up interval
    fetchGoldPrices();

    pollingIntervalRef.current = setInterval(async () => {
      console.log("Polling for gold price update");
      await fetchGoldPrices();
    }, 30000); // Poll every 30 seconds

    return () => {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
      }
    };
  }, []);

  // Set up WebSocket with fallback to polling
  const setupWebSocket = useCallback(() => {
    // If we're already using polling, don't try WebSocket again
    if (usePolling) {
      return setupPolling();
    }

    const wsUrl = "wss://jewelleryapp.onrender.com/ws/goldprice";

    console.log("Attempting to set up WebSocket connection");
    setWsStatus("Connecting...");

    try {
      // Close existing connection if any
      if (socketRef.current) {
        socketRef.current.close();
      }

      // Create new WebSocket connection
      const socket = new WebSocket(wsUrl);
      socketRef.current = socket;

      let connectionTimeout = setTimeout(() => {
        console.log("WebSocket connection timed out");
        socket.close();
        setupPolling();
      }, 5000);

      socket.onopen = () => {
        console.log("WebSocket connected successfully");
        clearTimeout(connectionTimeout);
        setWsStatus("Connected (real-time)");
        setUsePolling(false);
      };

      socket.onmessage = async (event) => {
        try {
          console.log("WebSocket message received:", event.data);
          const data = JSON.parse(event.data);

          // If we receive a price update notification, fetch the latest prices
          if (data && data.type === "PRICE_UPDATE") {
            await fetchGoldPrices();
          }
        } catch (err) {
          console.error("Error processing WebSocket message:", err);
        }
      };

      socket.onerror = (error) => {
        console.error("WebSocket error:", error);
        clearTimeout(connectionTimeout);
        setWsStatus("Connection failed, switching to polling");
        setupPolling();
      };

      socket.onclose = (event) => {
        console.log("WebSocket closed, code:", event.code);
        if (!usePolling) {
          // Only try to reconnect if we haven't switched to polling
          setWsStatus("Disconnected, attempting to reconnect...");
          setTimeout(() => setupWebSocket(), 5000);
        }
      };

      return () => {
        clearTimeout(connectionTimeout);
        if (socket.readyState === WebSocket.OPEN) {
          socket.close();
        }
      };
    } catch (error) {
      console.error("Failed to create WebSocket:", error);
      setupPolling();
      return () => {};
    }
  }, [setupPolling, usePolling]);

  // Initial setup on component mount
  useEffect(() => {
    console.log("Component mounted, initializing...");

    const initializeData = async () => {
      // Fetch data in parallel
      await Promise.all([
        fetchGoldPrices(),
        fetchProducts(),
        fetchCategories(),
      ]);

      // Calculate prices if all data is loaded
      if (Object.keys(caratPrices).length > 0 && products.length > 0) {
        calculateProductPrices(products, caratPrices);
      }
    };

    initializeData();
    const cleanup = setupWebSocket();

    return () => {
      console.log("Component unmounting, cleaning up...");
      if (typeof cleanup === "function") {
        cleanup();
      }
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
      }
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [setupWebSocket]);

  // Recalculate prices when gold prices or products change
  useEffect(() => {
    if (Object.keys(caratPrices).length > 0 && products.length > 0) {
      calculateProductPrices(products, caratPrices);
    }
  }, [caratPrices, products, calculateProductPrices]);

  // Manual refresh button handler
  const handleManualRefresh = async () => {
    await fetchGoldPrices();
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedCategory("all");
    setSelectedCarat("all");
  };

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Get list of carats from API data
  const caratList = Object.keys(caratPrices).sort((a, b) => {
    // Sort by carat value (extract number from string like "24K")
    const caratA = parseInt(a.replace(/\D/g, ""));
    const caratB = parseInt(b.replace(/\D/g, ""));
    return caratB - caratA; // Sort highest to lowest
  });

  // Get unique carats from products
  const uniqueCarats = [
    ...new Set(products.map((product) => (product.carat || "").toUpperCase())),
  ].filter(Boolean);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
      <h1 className="text-2xl font-semibold text-yellow-700">
        Jewellery Products
      </h1>
      {Object.keys(caratPrices).length > 0 && (
        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 w-full lg:w-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-yellow-800">
              Today's Gold Prices
            </span>
            <div className="flex items-center">
              <span
                className={`w-2 h-2 rounded-full ${
                  wsStatus.includes("Connected")
                    ? "bg-green-500"
                    : wsStatus.includes("polling")
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
              ></span>
              <span className="text-xs text-yellow-600 ml-2">{wsStatus}</span>
            </div>
          </div>
  
          {/* Carat-wise price grid */}
          <div className="grid grid-cols-2 gap-3 mb-2">
            {caratList.map((carat) => (
              <div
                key={carat}
                className="bg-yellow-50 p-2 rounded border border-yellow-200"
              >
                <div className="text-xs text-yellow-800">
                  {carat} Gold or Silver
                </div>
                <div className="text-lg font-bold text-yellow-700">
                  ₹{parseFloat(caratPrices[carat]).toLocaleString()}/g
                </div>
              </div>
            ))}
            {/* Add placeholder if we have odd number of carats */}
            {caratList.length % 2 !== 0 && (
              <div className="bg-yellow-50 p-2 rounded border border-yellow-200 opacity-0"></div>
            )}
          </div>
  
          <div className="flex justify-end mt-1">
            <button
              onClick={handleManualRefresh}
              className="text-xs bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
            >
              Refresh Prices
            </button>
          </div>
        </div>
      )}
    </div>
  
    {/* Main content with sidebar layout */}
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left sidebar for filters */}
      <div className="lg:w-1/4">
        <div className="bg-white rounded-lg shadow p-4 sticky top-4">
          <h2 className="text-lg font-semibold mb-4 text-gray-700 border-b pb-2">
            Filter Products
          </h2>
          
          {/* Category filter */}
          <div className="mb-4">
            <label
              htmlFor="categoryFilter"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select
              id="categoryFilter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              disabled={categoriesLoading}
            >
              <option value="all">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {categoriesLoading && (
              <p className="text-xs text-gray-500 mt-1">
                Loading categories...
              </p>
            )}
          </div>
  
          {/* Carat filter */}
          <div className="mb-4">
            <label
              htmlFor="caratFilter"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Carat
            </label>
            <select
              id="caratFilter"
              value={selectedCarat}
              onChange={(e) => setSelectedCarat(e.target.value)}
              className="w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            >
              <option value="all">All Carats</option>
              {uniqueCarats.map((carat, index) => (
                <option key={index} value={carat}>
                  {carat}
                </option>
              ))}
            </select>
          </div>
  
          {/* Clear filters button */}
          <div className="mt-6">
            <button
              onClick={handleClearFilters}
              className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md transition-colors"
            >
              Clear Filters
            </button>
          </div>
          
          {/* Filter status */}
          {(selectedCategory !== "all" || selectedCarat !== "all") && (
            <div className="mt-4 bg-blue-50 text-blue-700 p-3 rounded-md text-sm">
              <p className="font-medium mb-1">Active Filters:</p>
              {selectedCategory !== "all" && (
                <p>Category: <span className="font-bold">{selectedCategory}</span></p>
              )}
              {selectedCarat !== "all" && (
                <p>Carat: <span className="font-bold">{selectedCarat}</span></p>
              )}
              <p className="mt-1">Showing <span className="font-bold">{filteredProducts.length}</span> products</p>
            </div>
          )}
        </div>
      </div>
  
      {/* Right side for product listing */}
      <div className="lg:w-3/4">
        {isLoading && <p className="text-center py-4">Loading products...</p>}
        {error && <p className="text-red-500 text-center py-4">{error}</p>}
        {!isLoading && filteredProducts.length === 0 && (
          <p className="text-center py-4">
            No products found matching your filters.
          </p>
        )}
  
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {currentProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white p-3 rounded-xl shadow-md border border-gray-200 transition-transform transform hover:scale-[1.02] hover:shadow-lg"
            >
              <img
                src={
                  product.images?.[0] ||
                  product.coverImage ||
                  "https://via.placeholder.com/150"
                }
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <h2 className="text-lg font-semibold uppercase text-yellow-700 truncate">
                {product.name}
              </h2>
              <p className="text-xs text-yellow-600 mb-1 font-bold uppercase">{product.category}</p>
              <p className="text-xs text-gray-500 line-clamp-2 h-[2.5rem]">
                {product.description}
              </p>
  
              <div className="mt-2 flex flex-wrap gap-1 text-xs">
                <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 font-medium rounded">
                  {product.carat || product.karat || "N/A"}
                </span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-800 font-bold uppercase rounded">
                  Net: {product.netWeight || product.weight || "N/A"}g
                </span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-800 font-bold uppercase rounded">
                  Gross: {product.grossWeight || product.weight || "N/A"}g
                </span>
              </div>
  
              {calculatedPrices[product._id] ? (
                <div className="mt-2 py-1 border-t text-sm">
                  <span className="text-gray-600">Current Price: </span>
                  <span className="font-bold text-yellow-700">
                    ₹
                    {parseFloat(
                      calculatedPrices[product._id].total
                    ).toLocaleString()}
                  </span>
                </div>
              ) : (
                product.price && (
                  <div className="mt-2 py-1 border-t text-sm">
                    <span className="text-gray-600">Price: </span>
                    <span className="font-bold text-yellow-700">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.discountedPrice && (
                      <p className="text-xs text-green-600 mt-0.5">
                        Discounted: ₹{product.discountedPrice.toLocaleString()}
                      </p>
                    )}
                  </div>
                )
              )}
  
              <div className="flex justify-end mt-3">
                <button
                  className="bg-yellow-500 text-white px-3 py-1.5 text-xs rounded-md hover:bg-yellow-600"
                  onClick={() => navigate(`/product/${product._id}`)}
                >
                  See more
                </button>
              </div>
            </div>
          ))}
        </div>
  
        {/* Pagination with dropdown */}
        {filteredProducts.length > 0 && (
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
            <div className="text-sm text-gray-500">
              Showing {indexOfFirstProduct + 1}-
              {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
              {filteredProducts.length} products
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center px-3 py-2 rounded border ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-500 hover:bg-gray-50"
                } text-sm font-medium`}
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              
              <div className="inline-block">
                <select
                  value={currentPage}
                  onChange={(e) => paginate(Number(e.target.value))}
                  className="rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                >
                  {Array.from({
                    length: Math.ceil(filteredProducts.length / productsPerPage),
                  }).map((_, index) => (
                    <option key={index} value={index + 1}>
                      Page {index + 1}
                    </option>
                  ))}
                </select>
              </div>
              
              <button
                onClick={nextPage}
                disabled={
                  currentPage ===
                  Math.ceil(filteredProducts.length / productsPerPage)
                }
                className={`relative inline-flex items-center px-3 py-2 rounded border ${
                  currentPage ===
                  Math.ceil(filteredProducts.length / productsPerPage)
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-500 hover:bg-gray-50"
                } text-sm font-medium`}
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
  );
};

export default ViewProductsPage;
