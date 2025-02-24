import React from "react";
import FlashBanner from "./FlashBanner";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
  FaChevronDown,
} from "react-icons/fa";
import Nav from "./micro-components/Nav";

const Navbar = () => {
  const icons = (
    <div className="flex ml-2 gap-2 items-center">
      <FaTwitter className="text-white" />
      <FaFacebook className="text-white" />
      <FaInstagram className="text-white" />
      <FaLinkedin className="text-white" />
      <FaYoutube className="text-white" />
      <FaPinterest className="text-white" />
    </div>
  );
  return (
    <header className="w-full bg-[#1B6392]">
      <FlashBanner />
      <div className="top w-full md:flex md:items-center md:justify-between text-gray-50 max-w-5xl mx-auto">
        <p className="text-sm text-gray-50 text-center md:text-left">
          Welcome to Clicon Online eCommerce store
        </p>
        <div className="flex justify-between items-center px-4 py-2 md:px-0 md:gap-2">
          <p className="flex text-sm">Follow us: {icons}</p>
          <div className="flex  text-sm border-l border-l-[rgba(255,255,255,0.5)] pl-2">
            <span className="px-1 flex items-center gap-1">
              Eng <FaChevronDown className="w-2 opacity-50" />
            </span>
            <span className="px-1 flex items-center gap-1">
              Usd <FaChevronDown className="w-2 opacity-50" />
            </span>
          </div>
        </div>
      </div>
      <Nav/>
    </header>
  );
};

export default Navbar;
