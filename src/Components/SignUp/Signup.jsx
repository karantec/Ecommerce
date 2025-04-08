import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    profileImage: "",
    addresses: [
      { type: "Home", address: "", pinCode: "" },
      { type: "Work", address: "", pinCode: "" },
    ],
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleAddressChange = (index, field, value) => {
    const updatedAddresses = [...formData.addresses];
    updatedAddresses[index][field] = value;
    setFormData({ ...formData, addresses: updatedAddresses });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("https://jewelleryapp.onrender.com/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        alert(result.message || "Signup failed.");
      }
    } catch (error) {
      alert("Error submitting form");
      console.error(error);
    }
  };

  return (
    <section className="min-h-screen bg-white py-10">
      <div className="max-w-5xl mx-auto shadow-xl border rounded-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Left side image */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src="https://manubhai.in/SocialMedia/post_artworks/DGBD00687.jpg"
            alt="Jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Signup form */}
        <div className="w-full md:w-1/2 p-6 sm:p-10">
          <h2 className="text-3xl font-bold mb-4 text-brown-800 text-center">Create an Account</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              id="profileImage"
              value={formData.profileImage}
              onChange={handleChange}
              placeholder="Profile Image URL"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Addresses */}
            {formData.addresses.map((addr, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-700 mb-1">{addr.type} Address</h4>
                <input
                  type="text"
                  placeholder="Street Address"
                  value={addr.address}
                  onChange={(e) => handleAddressChange(index, "address", e.target.value)}
                  className="w-full mb-2 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  type="text"
                  placeholder="PIN Code"
                  value={addr.pinCode}
                  onChange={(e) => handleAddressChange(index, "pinCode", e.target.value)}
                  className="w-full mb-2 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-[#4C2A2A] text-white py-3 rounded-lg font-semibold hover:bg-purple-900 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-brown-700 font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
