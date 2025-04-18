"use client";

import React, { useState } from "react";
import { HeroGrid } from "./HeroGrid";
import ShopNowButton from "./micro-components/ShopNowButton";

const ComputerAccessories = () => {
  return (
    <section className="my-12 w-full grid grid-cols-1 md:grid-cols-[76%,24%] gap-1 px-4 md:px-0">
      <div>
        <FeaturedNav />
        <HeroGrid />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col bg-[#F7E99E] p-3 py-5 h-[60%] rounded-md ">
          <div className="img mx-auto">
            <img src="/xiaomiBuds.png" alt="xiaomi buds" />
          </div>

          <div className="flex flex-col text-center justify-between gap-1 mb-4">
            <h3 className="text-2xl text-gray-900 font-semibold">
              Xiaomi True
              <br /> Wireless Earbuds
            </h3>
            <p className="text-gray-700 text-sm">
              Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.
            </p>
            <span className="text-gray-700 text-sm">
              Only for: <span className="p-1 bg-white text-base">$299</span>
            </span>
          </div>
          <ShopNowButton />
        </div>

        <div className="bg-[#124261] px-4 py-8 flex flex-col gap-2 h-[38%] rounded-md">
          <h4 className="p-1 bg-white/10 text-white text-center self-center">
            SUMMER SALES
          </h4>
          <h3 className="text-2xl text-white font-semibold self-center">37% DISCOUNT</h3>
          <p className="text-lg text-white text-center">
            Only for <span className="text-warning-500">smartphone</span> Products.
          </p>
          <ShopNowButton color="bg-secondary-500" />
        </div>
      </div>
    </section>
  );
};

const FeaturedNav = () => {
  const links = ["All", "Smartphones", "Laptops", "Tv", "Headphones"];
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="text-[14px] flex flex-col md:flex-row justify-between py-2 ">
      <h3 className="text-base font-semibold text-center md:text-start">
        Computer Accessories
      </h3>
      <ul className="flex gap-3 featured-nav-list justify-between mb-5 md:mb-0">
        {links.map((item, idx) => (
          <li
            key={item}
            className={activeIndex === idx ? "active" : "active"}
            onClick={() => setActiveIndex(idx)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ComputerAccessories;
