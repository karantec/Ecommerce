import { userStore } from "../store/userStore";

// const BASE_URL = "https://jewelleryapp.onrender.com/order";
// const BASE_URL = "https://backend.srilaxmialankar.com/order";
const BASE_URL = "https://backend.srilaxmialankar.com/order";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  //   const token = userStore((state) => state.token);
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

export const createOrder = async (orderData) => {
  try {
    const response = await fetch(`${BASE_URL}/create`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(orderData),
    });

    console.log(
      "response from create order " + JSON.stringify(response, null, 2)
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("🧨 Order creation failed:", result);
      throw new Error(result.message || "Failed to create order");
    }

    return result;
  } catch (error) {
    console.error("🔥 createOrder error:", error);
    throw new Error(error.message);
  }
};

export const verifyPayment = async (paymentData) => {
  try {
    const response = await fetch(`${BASE_URL}/verify-payment`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(paymentData),
    });
    if (!response.ok) throw new Error("Payment verification failed");
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserOrders = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}`, {
      headers: getAuthHeaders(),
    });
    if (!response.ok) throw new Error("Failed to fetch orders");
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getOrderDetails = async (orderId) => {
  try {
    const response = await fetch(`${BASE_URL}/${orderId}`, {
      headers: getAuthHeaders(),
    });
    if (!response.ok) throw new Error("Failed to fetch order details");
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
