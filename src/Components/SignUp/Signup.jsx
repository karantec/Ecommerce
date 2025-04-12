import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userStore } from "../../store/userStore";

const Signup = () => {
  const navigate = useNavigate();
  const setUserData = userStore((state) => state.setUserData);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    profileImage: "",
    addresses: [
      {
        type: "Home",
        addressLine: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        primaryPhone: "",
      },
      {
        type: "Work",
        addressLine: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        primaryPhone: "",
      },
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
        setUserData(response.data);
      } else {
        alert(result.message || "Signup failed.");
      }
    } catch (error) {
      alert("Error submitting form");
      console.error(error);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Image Section */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src="https://manubhai.in/SocialMedia/post_artworks/DGBD00687.jpg"
            alt="Jewelry"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Signup Form Section */}
        <div className="w-full md:w-1/2 p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-center text-brown-800 mb-6">Create an Account</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full border rounded-lg px-4 py-3"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full border rounded-lg px-4 py-3"
              />
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              type="text"
              id="profileImage"
              value={formData.profileImage}
              onChange={handleChange}
              placeholder="Profile Image URL"
              className="w-full border rounded-lg px-4 py-3"
            />

            {/* Address Fields */}
            {formData.addresses.map((addr, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-xl border mb-3">
                <h4 className="font-medium text-lg text-gray-700 mb-4">{addr.type} Address</h4>

                <input
                  type="text"
                  placeholder="Address Line"
                  value={addr.addressLine}
                  onChange={(e) => handleAddressChange(index, "addressLine", e.target.value)}
                  className="w-full border mb-3 rounded-lg px-4 py-3"
                  required
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
                  <input
                    type="text"
                    placeholder="City"
                    value={addr.city}
                    onChange={(e) => handleAddressChange(index, "city", e.target.value)}
                    className="border rounded-lg px-4 py-3"
                    required
                  />
                  <input
                    type="text"
                    placeholder="State"
                    value={addr.state}
                    onChange={(e) => handleAddressChange(index, "state", e.target.value)}
                    className="border rounded-lg px-4 py-3"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    value={addr.zipcode}
                    onChange={(e) => handleAddressChange(index, "zipcode", e.target.value)}
                    className="border rounded-lg px-4 py-3"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    value={addr.country}
                    onChange={(e) => handleAddressChange(index, "country", e.target.value)}
                    className="border rounded-lg px-4 py-3"
                    required
                  />
                </div>

                <input
                  type="text"
                  placeholder="Primary Phone"
                  value={addr.primaryPhone}
                  onChange={(e) => handleAddressChange(index, "primaryPhone", e.target.value)}
                  className="w-full border rounded-lg px-4 py-3"
                  required
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-[#4C2A2A] hover:bg-[#361d1d] transition text-white py-3 rounded-lg font-semibold"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-brown-700 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
