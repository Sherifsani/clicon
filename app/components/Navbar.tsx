import React from "react";
import FlashBanner from "./FlashBanner";
import {}

const Navbar = () => {
  return (
    <header>
      <FlashBanner />
      <div className="top bg-[#1B6392] w-full">
              <p className="text-sm text-gray-50">Welcome to Clicon Online eCommerce store</p>
              <p>Follow us on</p>
      </div>
      <nav></nav>
    </header>
  );
};

export default Navbar;
