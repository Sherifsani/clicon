"use client";

import React, { useState } from "react";
import { HeroGrid } from "./HeroGrid";
import FeaturedCard from "./FeaturedCard";
import { div } from "motion/react-client";

const FeaturedProducts = () => {
  return (
    <section className="my-12 w-full grid grid-cols-1 md:grid-cols-[24%,76%] gap-1 px-4 md:px-0">
      <FeaturedCard />
      <div>
        <FeaturedNav />
        <HeroGrid />
      </div>
    </section>
  );
};

const FeaturedNav = () => {
  const links = ["All", "Smartphones", "Laptops", "Tv", "Headphones"];
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="text-[14px] flex flex-col md:flex-row justify-between py-2 ">
      <h3 className="text-base font-semibold text-center md:text-start">Featured Products</h3>
      <ul className="flex gap-3 featured-nav-list justify-between mb-5 md:mb-0">
        {links.map((item, idx) => (
          <li key={item} className={activeIndex === idx ? "active" : "active"} onClick={() => setActiveIndex(idx)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FeaturedProducts;
