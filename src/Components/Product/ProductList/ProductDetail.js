import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../../CartContext";
import ProductCard from "./ProductCard";

const descriptionData = [
  {
    name: "Model",
    value: "#8786867",
  },
  {
    name: "Style",
    value: "Classic style",
  },
  {
    name: "Certificate",
    value: "ISO-898921212",
  },
  {
    name: "Size",
    value: "34mm x 450mm x 19mm",
  },
  {
    name: "Memory",
    value: "36GB RAM",
  },
];

const ProductDetailComplete = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jewelleryapp.onrender.com/gold/${productId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
        setSelectedImage(data.coverImage || data.images?.[0] || "");
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    const productToAdd = { ...product, quantity: 1 };
    addToCart(productToAdd);
    navigate("/cart");
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-600"></div>
      </div>
    );

  if (!product)
    return (
      <div className="text-center py-12">
        <p className="text-xl text-red-500">Product not found</p>
        <button
          onClick={() => navigate("/shop")}
          className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Return to Products
        </button>
      </div>
    );

  return (
    // <div className="p-4 md:p-8 max-w-6xl mx-auto "> Changed This
    <div className=" width-full ">
      <button
        onClick={() => navigate("/shop")}
        className=" p-4 md:p-8 flex items-center text-gray-600 hover:text-yellow-600 mb-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Products
      </button>
      <div className="p-4 md:p-8 flex flex-col md:flex-row gap-8 ">
        {/* Left: Product Images */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col md:w-24 gap-2 order-2 md:order-1">
              {product.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name || "Product"} thumbnail ${index + 1}`}
                  className={`w-16 h-16 object-cover cursor-pointer border rounded ${
                    selectedImage === img
                      ? "border-orange-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedImage(img)}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/150?text=No+Image";
                  }}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 order-1 md:order-2">
              <img
                src={
                  selectedImage ||
                  "https://via.placeholder.com/400x400?text=No+Image"
                }
                alt={product.name || "Product"}
                className="w-full h-[400px] object-cover rounded-lg"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x400?text=No+Image";
                }}
              />
            </div>
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">
            {product.name || "Unnamed Product"}
          </h1>

          {/* Price Information */}
          <div className="text-xl text-gray-600">
            {product.priceDetails?.totalPrice ? (
              <>
                <span className="text-2xl font-bold text-black">
                  ₹
                  {parseFloat(product.priceDetails.totalPrice).toLocaleString(
                    "en-IN"
                  )}
                </span>
                {product.priceDetails.pricePerGram && (
                  <span className="text-sm text-orange-500 ml-2">
                    (₹{product.priceDetails.pricePerGram}/g)
                  </span>
                )}
              </>
            ) : (
              <>
                <span className="text-2xl font-bold text-black">
                  ₹
                  {parseFloat(
                    product.discountedPrice || product.price || 0
                  ).toLocaleString("en-IN")}
                </span>
                {product.price &&
                  product.discountedPrice &&
                  product.price > product.discountedPrice && (
                    <>
                      <span className="line-through text-gray-400 ml-2">
                        ₹{parseFloat(product.price).toLocaleString("en-IN")}
                      </span>
                      <span className="text-orange-500 font-semibold ml-2">
                        (
                        {(
                          ((product.price - product.discountedPrice) /
                            product.price) *
                          100
                        ).toFixed(0)}
                        % OFF)
                      </span>
                    </>
                  )}
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700">
            {product.description || "No description available."}
          </p>

          {/* Product Specifications */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <h2 className="text-lg font-semibold mb-2">Product Details</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {product.category || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Weight:</span>{" "}
                {product.netWeight ? `${product.netWeight}g` : "N/A"}
              </p>
              <p>
                <span className="font-semibold">Karat:</span>{" "}
                {product.carat || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Metal:</span>{" "}
                {product.metal || "Gold"}
              </p>
              <p>
                <span className="font-semibold">Availability:</span>{" "}
                <span
                  className={
                    product.isAvailable !== false
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {product.isAvailable !== false ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              {product.dimensions && (
                <p>
                  <span className="font-semibold">Dimensions:</span>{" "}
                  {product.dimensions}
                </p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-yellow-500 text-white px-4 py-3 rounded-lg hover:bg-yellow-600 transition-colors flex justify-center items-center"
              disabled={product.isAvailable === false}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-2 p-4 md:p-8  border-black w-full">
        <div>
          <h2 className="font-normal text-2xl">Description</h2>
          <p className="font-light text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <table className="border-2 border-grey-100   m-5">
          <tbody>
            {descriptionData.map((item) => {
              return (
                <tr className="border-2 w-[550px]">
                  <td className="border-2 bg-gray-200 w-[200px] py-1 px-1 font-normal text-base">
                    {item.name}
                  </td>
                  <td className="border-2 w-[350px] px-1 font-normal text-base">
                    {item.value}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="border-t-2 p-4 md:p-8  border-black  w-full ">
        {/* Icon and Line */}
        <div className="flex items-center justify-center space-x-4 mb-2">
          <div className="w-16 h-px bg-gray-300"></div>
          <img
            src="/Category/icon.png"
            alt="Diamond Icon"
            className="w-6 h-6 inline-block"
          />
          <div className="w-16 h-px bg-gray-300"></div>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-garamond bg-gradient-to-r from-[#E66E06] to-[#6E3000] text-transparent bg-clip-text justify-center items-center flex">
          Related Products
        </h2>
        <div className="flex flex-row my-5  ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailComplete;
