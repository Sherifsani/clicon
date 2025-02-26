import React from "react";
import Link from "next/link";
import ShopNowButton from "./ShopNowButton";

const HeroCard = () => {
  return (
    <div className="bg-gray-200 rounded-md pl-6 py-6 flex flex-col-reverse sm:flex-row items-center col-span-2 row-span-2 justify-between">
      <div className="texts flex flex-col gap-5 items-start">
        <div className="flex items-center gap-2 -mb-3">
          <div className="bg-secondary-600 w-6 h-[2px]"></div>
          <span className="text-secondary-500 text-[12px]">
            THE BEST PLACE TO PLAY
          </span>
        </div>
        <h1 className="font-semibold text-4xl">Xbox Consoles</h1>
        <p className="text-gray-600 text-sm">
          Save up to 50% on select Xbox games.
          <br /> Get 3 months of PC Game Pass for $2
          <br /> USD.
        </p>
        <ShopNowButton />
      </div>

      <div className="image relative">
        <img src="/Image.png" alt="" />
        <div className="price-tag absolute top-0 right-0 bg-secondary-500 text-white w-16 h-16 grid place-items-center rounded-full -translate-x-full text-sm">
          $299
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
