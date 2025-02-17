import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";

const ShoppingCart = () => {
  const { cart, setCart } = useCart();

  const handleQuantityChange = (id, increment) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + increment),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getSubtotal = () => {
    return cart.reduce(
      (total, item) => total + item.discountedPrice * item.quantity,
      0
    );
  };

  const calculateTotals = () => {
    const subtotal = getSubtotal();
    const tax = Math.round(subtotal * 0.1); // 10% tax
    const shipping = subtotal > 5000 ? 0 : 50; // Free shipping over ₹5000
    const discount = 0; // You can implement coupon logic here
    const total = subtotal + tax + shipping - discount;

    return { subtotal, tax, shipping, discount, total };
  };

  const totals = calculateTotals();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link to="/productlist">
          <button className="bg-orange-500 text-white px-6 py-2 rounded">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-6 space-y-6">
      <div className="p-4 bg-white rounded-lg shadow w-full">
        <h1 className="text-xl font-bold mb-4">Shopping Cart</h1>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="py-2 px-4">Product</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Quantity</th>
                <th className="py-2 px-4">Subtotal</th>
                <th className="py-2 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-2 px-4 flex items-center">
                    <img
                      src={item.images?.[0] || `https://via.placeholder.com/50`}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded mr-2"
                    />
                    <span className="truncate">{item.name}</span>
                  </td>
                  <td className="py-2 px-4">₹{item.discountedPrice}</td>
                  <td className="py-2 px-4">
                    <div className="flex items-center">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="px-2 py-1 border rounded-l bg-gray-200"
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        readOnly
                        className="w-12 text-center border-t border-b"
                      />
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="px-2 py-1 border rounded-r bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-2 px-4">
                    ₹{item.discountedPrice * item.quantity}
                  </td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row-reverse sm:justify-between gap-6">
        <div className="p-4 bg-white rounded-lg shadow w-full sm:w-1/3">
          <h2 className="text-lg font-bold bg-orange-500 text-white px-4 py-2 rounded-t">
            Cart Total
          </h2>
          <div className="bg-gray-50 p-4">
            <div className="flex justify-between py-2">
              <span>Subtotal</span>
              <span>₹{totals.subtotal}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Tax (10%)</span>
              <span>₹{totals.tax}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Shipping</span>
              <span>
                {totals.shipping === 0 ? "Free" : `₹${totals.shipping}`}
              </span>
            </div>
            <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{totals.total}</span>
            </div>
          </div>
          <Link to="/checkout">
            <button className="bg-orange-500 text-white px-4 py-2 w-full mt-4 rounded hover:bg-orange-600 transition-colors">
              PROCEED TO CHECKOUT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
