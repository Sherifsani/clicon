"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Nav = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchOpen((prev) => !prev);
  };
  return (
    <nav className="flex items-center justify-between p-4 relative">
      <div className="logo">
        <img src="/Logo.svg" alt="clicon logo" className="h-10" />
      </div>
      <div className="icons flex items-center gap-2">
        <FaSearch
          className="w-5 md:w-[unset] text-gray-50 cursor-pointer"
          onClick={toggleSearchBar}
        />
        <img
          src="/ShoppingCartSimple.svg"
          alt=""
          className="w-5 md:w-[unset] cursor-pointer"
        />
        <img src="/Heart.svg" alt="" className="w-5 md:w-[unset]" />
        <img src="/User.svg" alt="" className="w-5 md:w-[unset]" />
      </div>

      <div
        className={`search-bar absolute transition-all left-0 bottom-0 w-full px-4 -z-10 ${
          isSearchOpen ? "translate-y-full block" : ""
        }`}
      >
        <input
          type="text"
          className="p-3 w-full mx-auto border-2 text-gray-500 focus:outline-none"
          placeholder="Search for anything..."
        />
      </div>
    </nav>
  );
};

export default Nav;
