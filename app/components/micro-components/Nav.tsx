"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Nav = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchOpen((prev) => !prev);
  };
  return (
    <nav className="flex items-center justify-between p-4 md:px-0 relative border-t-[0.5px] border-t-gray-300 max-w-5xl mx-auto">
      <div className="logo">
        <img src="/Logo.svg" alt="clicon logo" className="h-8" />
      </div>
      <div className="search-bar w-1/2 hidden sm:flex items-center bg-white rounded-sm overflow-hidden pr-5">
        <input
          type="text"
          placeholder="Search for anything..."
          className="text-gray-500  focus:outline-none text-sm pl-5 py-3 w-full"
              />
              <img src="/MagnifyingGlass.svg" alt="" className="w-5 h-5 " />
      </div>
      <div className="icons flex items-center gap-2 sm:gap-3 md:gap-5">
        <FaSearch
          className="w-5 md:w-[unset] text-gray-50 cursor-pointer sm:hidden"
          onClick={toggleSearchBar}
        />
        <img
          src="/ShoppingCartSimple.svg"
          alt=""
          className="w-5 h-5 cursor-pointer"
        />
        <img src="/Heart.svg" alt="" className="w-5 h-5 " />
        <img src="/User.svg" alt="" className="w-5 h-5 " />
      </div>

      <div
        className={`search-bar absolute transition-all left-0 bottom-0 w-full px-4 -z-10 ${
          isSearchOpen ? "translate-y-full block" : ""
        }`}
      >
        <input
          type="text"
          className="p-3 w-full mx-auto border-2 text-gray-500 focus:outline-none text-sm"
          placeholder="Search for anything..."
        />
      </div>
    </nav>
  );
};

export default Nav;
