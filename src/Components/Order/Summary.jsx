import React, { useState } from "react";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash-on-delivery");

  const products = [
    {
      image: "https://manubhai.in/SocialMedia/post_artworks/DGBD00687.jpg",
      title: "DIAMOND CRISTIRIAL STUD",
      quantity: 2,
      price: 3000,
    },
    {
      image: "https://manubhai.in/SocialMedia/post_artworks/DGBD00687.jpg",
      title: "GOLD PENDANT",
      quantity: 1,
      price: 15000,
    },
  ];

  const subtotal = products.reduce((total, product) => total + product.price * product.quantity, 0);
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  return (
    <div className="mx-auto mt-8 p-6 border rounded-lg w-full max-w-2xl">
      <h2 className="text-lg font-bold mb-6">Billing details</h2>
      <div className="space-y-6">
        {products.map((product, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-16 h-16 rounded-md"
              />
              <div className="ml-4">
                <p className="font-medium text-sm">{product.title}</p>
                <p className="text-xs text-gray-500">QTY {product.quantity}</p>
              </div>
            </div>
            <p className="text-sm font-semibold">₹{product.price * product.quantity}</p>
          </div>
        ))}
      </div>

      {/* Subtotal */}
      <div className="mt-6 border-t pt-4 space-y-2">
        <div className="flex justify-between pt-4">
          <p className="text-sm text-gray-500">SUBTOTAL</p>
          <p className="text-sm font-semibold">₹{subtotal}</p>
        </div>
        <div className="flex justify-between pt-4">
          <p className="text-sm text-gray-500">GST 18%</p>
          <p className="text-sm font-semibold">₹{gst.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-lg pt-4 font-bold">
          <p>Total</p>
          <p>₹{total.toFixed(2)}</p>
        </div>
      </div>

      {/* Payment Method */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold">Choose payment method</h3>
        <div className="mt-4 space-y-3">
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="payment-method"
              value="debit-credit"
              className="h-4 w-4 text-orange-600 focus:ring-orange-500"
              checked={paymentMethod === "debit-credit"}
              onChange={() => setPaymentMethod("debit-credit")}
            />
            <span className="text-sm">Debit/Credit Card</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="payment-method"
              value="bank-transfer"
              className="h-4 w-4 text-orange-600 focus:ring-orange-500"
              checked={paymentMethod === "bank-transfer"}
              onChange={() => setPaymentMethod("bank-transfer")}
            />
            <span className="text-sm">IMPS/Bank Transfer</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="payment-method"
              value="upi"
              className="h-4 w-4 text-orange-600 focus:ring-orange-500"
              checked={paymentMethod === "upi"}
              onChange={() => setPaymentMethod("upi")}
            />
            <span className="text-sm">UPI Payment app</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="payment-method"
              value="cash-on-delivery"
              className="h-4 w-4 text-orange-600 focus:ring-orange-500"
              checked={paymentMethod === "cash-on-delivery"}
              onChange={() => setPaymentMethod("cash-on-delivery")}
            />
            <div>
              <span className="text-sm font-semibold">Cash on Delivery</span>
              <p className="text-xs text-gray-500">Pay with cash upon delivery.</p>
            </div>
          </label>
        </div>
      </div>

      {/* Place Order Button */}
     <Link to="/confirm"> <button
        type="button"
        className="mt-6 w-full py-3 text-center bg-orange-600 text-white font-bold text-sm rounded-md hover:bg-orange-500 transition"
      >
        PLACE ORDER
      </button></Link> 
    </div>
  );
};

export default OrderSummary;
