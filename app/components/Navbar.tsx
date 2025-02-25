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

  const quickLinks = [
    {
      text: "Track Order",
      img: "MapPinLine",
    },
    {
      text: "Compare",
      img: "ArrowsCounterClockwise",
    },
    {
      text: "Customer Support",
      img: "Headphones",
    },
    {
      text: "Need Help",
      img: "Info",
    },
  ];
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
      <hr className="w-full border-no bg-gray-300 opacity-50" />

      <Nav />
      <div className="bottom  bg-white py-3 px-4 md:px-0  text-[10px] text-gray-600">
        <div className="flex max-w-5xl mx-auto items-center">
          <span className="flex items-center gap-2 bg-gray-100 text-gray-900 px-4 py-3 shadow-sm rounded-md">
            <span>All Category</span>
            <img src="/CaretDown.svg" alt="" />
          </span>
          <div className="flex">
            {quickLinks.map((link, i) => (
              <span
                key={i}
                className="px-4 py-3 flex items-center gap-2 flex-col sm:flex-row"
              >
                <img src={`/${link.img}.svg`} className="w-4 h-4" alt="" />
                <span className="hidden md:inline ">{link.text}</span>
              </span>
            ))}
          </div>
          <div className="phone flex flex-row ml-auto items-center gap-2">
            <img src="/PhoneCall.svg" className="w-5 h-5" alt="phone" />
            <span className="hidden md:inline text-[12px] font-semibold">
              +234-806-051-7731
            </span>
          </div>
        </div>
      </div>
      <hr className="w-full border-gray-200 opacity-100" />
    </header>
  );
};

export default Navbar;
