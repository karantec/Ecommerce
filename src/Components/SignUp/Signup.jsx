import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    profileImage: "",
    addresses: [
      { type: "Home", address: "", pinCode: "" },
      { type: "Work", address: "", pinCode: "" },
    ],
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddressChange = (index, field, value) => {
    const updatedAddresses = [...formData.addresses];
    updatedAddresses[index][field] = value;
    setFormData((prev) => ({ ...prev, addresses: updatedAddresses }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://jewelleryapp.onrender.com/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
      if (response.ok) {
        alert("Signup successful! Please login.");
        navigate("/login");
      } else {
        alert(result.message || "Signup failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section className="h-screen bg-gray-100">
      <div className="container mx-auto flex h-full items-center justify-center px-4 md:px-8 lg:px-16">
        <div className="w-full max-w-5xl flex flex-wrap shadow-lg bg-white rounded-lg overflow-hidden">
          <div className="hidden w-full bg-blue-100 p-6 md:flex md:w-6/12 lg:p-8">
            <img
              src="https://manubhai.in/SocialMedia/post_artworks/DGBD00687.jpg"
              alt="Sample illustration"
              className="mx-auto h-auto max-w-full"
            />
          </div>

          <div className="w-full p-6 sm:p-8 md:w-6/12 lg:p-10">
            <h2 className="text-center text-2xl font-bold text-gray-700 sm:text-3xl">
              Create an Account
            </h2>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded border-gray-300 px-4 py-2 text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded border-gray-300 px-4 py-2 text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Password</label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full rounded border-gray-300 px-4 py-2 text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Phone</label>
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded border-gray-300 px-4 py-2 text-sm"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Profile Image URL</label>
                <input
                  type="text"
                  id="profileImage"
                  value={formData.profileImage}
                  onChange={handleChange}
                  className="w-full rounded border-gray-300 px-4 py-2 text-sm"
                />
              </div>

              {formData.addresses.map((address, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    {address.type} Address
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    value={address.address}
                    onChange={(e) => handleAddressChange(index, "address", e.target.value)}
                    className="w-full rounded border-gray-300 px-4 py-2 text-sm"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Pin Code"
                    value={address.pinCode}
                    onChange={(e) => handleAddressChange(index, "pinCode", e.target.value)}
                    className="w-full mt-2 rounded border-gray-300 px-4 py-2 text-sm"
                    required
                  />
                </div>
              ))}

              <button
                type="submit"
                className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Sign Up
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;