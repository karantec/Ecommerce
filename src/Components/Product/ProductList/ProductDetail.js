import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../../CartContext";

const ProductDetailComplete = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // ✅ Using the context function
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://jewelleryapp.onrender.com/gold/${productId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
        setSelectedImage(data.images?.[0] || "");
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <p className="text-center text-gray-500">Loading product details...</p>;
  if (!product) return <p className="text-center text-red-500">Product not found</p>;

  const handleAddToCart = () => {
    const productToAdd = { ...product, quantity: 1 }; // Ensure quantity is set
    addToCart(productToAdd);
    navigate("/cart");
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Product Images */}
        <div className="w-full md:w-1/2 flex">
          <div className="flex flex-col space-y-2">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={product.name || "Product"}
                className={`w-16 h-16 object-cover cursor-pointer border ${
                  selectedImage === img ? "border-orange-500" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <div className="flex-1">
            <img
              src={selectedImage}
              alt={product.name || "Product"}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">{product.name || "Unnamed Product"}</h1>
          <p className="text-xl text-gray-600">
            ₹{product.discountedPrice}{" "}
            <span className="line-through text-gray-400">₹{product.price}</span>{" "}
            <span className="text-orange-500 font-semibold">
              ({(((product.price - product.discountedPrice) / product.price) * 100).toFixed(0)}% OFF)
            </span>
          </p>
          <p className="text-gray-700">{product.description || "No description available."}</p>

          {/* Product Specifications */}
          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Product Details</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p><span className="font-semibold">Category:</span> {product.category || "N/A"}</p>
              <p><span className="font-semibold">Weight:</span> {product.weight ? `${product.weight}g` : "N/A"}</p>
              <p><span className="font-semibold">Karat:</span> {product.karat || "N/A"}</p>
              <p>
                <span className="font-semibold">Availability:</span>{" "}
                {product.isAvailable ? "In Stock" : "Out of Stock"}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="w-1/2 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
            >
              Add to Cart
            </button>
            <button className="w-1/2 border border-orange-500 text-orange-500 py-2 rounded-lg hover:bg-orange-500 hover:text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailComplete;
