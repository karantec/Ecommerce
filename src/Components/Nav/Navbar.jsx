import React, { useState } from "react";
import {
  FaUser,
  FaHeart,
  FaShoppingBag,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const { cartCount } = useCart();

  const navLinks = [
    { name: "What's New", path: "/" },
    { name: "About", path: "/about" },
    { name: "Product", path: "/productlist" },
    { name: "Cart", path: "/cart" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
    { name: "Signup", path: "/signup" },
  ];

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false); // Close menu on click (mobile)
  };

  return (
    <div>
      {/* Top bar */}
      <div className="bg-[#6E3000] text-white text-center py-1 text-sm">
        Free express worldwide shipping. Subscribe to discover
      </div>

      {/* Main navigation */}
      <div className="bg-[#E9F1ED] px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src="Slalogo.png" alt="Logo" className="h-24 w-auto"/>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Search Bar (hidden on mobile) */}
        <div className="hidden md:flex justify-center w-full">
          <div className="relative w-1/2">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="border border-[#C1C1C1] rounded-lg bg-[#E9F1ED] pl-10 pr-4 py-2 w-full focus:outline-none"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`text-gray-700 ${
                activeLink === link.name ? "text-yellow-500 font-semibold" : ""
              } hover:text-yellow-500`}
              onClick={() => handleLinkClick(link.name)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/login" className="text-gray-700">
            <FaUser className="text-xl" />
          </Link>
          <div className="relative">
            <Link to="/wishlist" className="text-gray-700">
              <FaHeart className="text-xl" />
            </Link>
            <span className="absolute -top-1 -right-2 bg-[#A45B32] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>
          <div className="relative">
            <Link to="/cart" className="text-gray-700">
              <FaShoppingBag className="text-xl" />
            </Link>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#A45B32] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#E9F1ED] p-6 space-y-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="block text-gray-700 hover:text-yellow-500"
              onClick={() => handleLinkClick(link.name)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
