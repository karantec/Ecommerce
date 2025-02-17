import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserOrders } from "../../api/OrderService";
import LoadingSpinner from "../Common/LoadingSpinner";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = localStorage.getItem("userId"); // Assuming you store userId in localStorage

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getUserOrders(userId);
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  if (loading) return <LoadingSpinner />;
  if (error)
    return <div className="text-red-500 text-center py-8">{error}</div>;
  if (!orders.length)
    return (
      <div className="text-center py-8">
        <p className="mb-4">No orders found</p>
        <Link
          to="/productlist"
          className="text-orange-500 hover:text-orange-600"
        >
          Continue Shopping
        </Link>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Order History</h1>
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order._id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold">Order #{order._id.slice(-6)}</p>
                <p className="text-gray-600">
                  Placed on: {new Date(order.createdAt).toLocaleDateString()}
                </p>
                <p className="text-gray-600">Status: {order.status}</p>
              </div>
              <div className="text-right">
                <p className="font-bold">₹{order.totalAmount}</p>
                <Link
                  to={`/orders/${order._id}`}
                  className="text-orange-500 hover:text-orange-600 text-sm"
                >
                  View Details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
