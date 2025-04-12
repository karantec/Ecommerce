import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { X, User } from "lucide-react";
import { userStore } from "../../store/userStore";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const setUserToken = userStore((state) => state.setUserData);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://jewelleryapp.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        alert("Login successful!");
        navigate("/profile");
        setUserToken(result.data.token);
      } else {
        alert(result.message || "Login failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section className="min-h-screen  mt-5 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="md:w-1/2 w-full h-64 md:h-auto">
          <img
            src="https://manubhai.in/SocialMedia/post_artworks/DGBD00687.jpg"
            alt="Jewellery"
            className="w-full h-full object-cover md:rounded-l-xl"
          />
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 w-full p-6 md:p-10">
          {/* Header Icons */}
          <div className="flex justify-between items-center mb-6">
            <User className="text-gray-600" />
            <X className="text-gray-600 cursor-pointer" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your e-mail
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="bestsite@gmail.com"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="********"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <button
                type="button"
                className="w-full sm:w-auto px-6 py-2 rounded-full border-2 border-[#4C2A2A] text-[#4C2A2A] font-medium hover:bg-[#f5f5f5] transition-all"
              >
                Register
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 rounded-full bg-[#4C2A2A] text-white font-medium hover:bg-[#3b1f1f] transition-all"
              >
                Log in
              </button>
            </div>

            {/* Recover Password */}
            <div className="text-sm text-right mt-4">
              <Link
                to="/forgot-password"
                className="text-gray-500 hover:text-gray-700"
              >
                Recover Password
              </Link>
            </div>

            {/* Quick Login */}
            <div className="pt-4 text-center">
              <p className="text-sm text-gray-600">Quick Login:</p>
              <div className="flex justify-center space-x-4 mt-2">
                <FaFacebookF className="text-blue-700 cursor-pointer hover:scale-110" />
                <FaGoogle className="text-red-600 cursor-pointer hover:scale-110" />
                <FaLinkedinIn className="text-blue-500 cursor-pointer hover:scale-110" />
              </div>
            </div>

            {/* Bottom Text */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Click on <span className="text-red-500">♡</span> the icon next to the model name to save it to favorites.
                Use favorite models as samples for creating items with your design.
              </p>
            </div>

            {/* Continue Shopping Button */}
            <div className="mt-4 text-center">
              <button className="w-full sm:w-auto px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">
                Continue Shopping
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
