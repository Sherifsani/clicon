import React from "react";
import HeroCard from "./micro-components/HeroCard";
import ShopNowButton from "./micro-components/ShopNowButton";

const HeroGrids = () => {
  return (
    <div className="flex flex-col md:grid grid-cols-3 grid-rows-2 gap-4">
      <HeroCard />
      <div className="bg-gray-900 rounded-md flex justify-between h-full">
        <div className="text w-1/2 flex flex-col gap-2 items-start pl-5 justify-center">
          <span className="text-warning-500 text-[10px]">SUMMER SALES</span>
          <h2 className="text-white font-semibold text-xl">
            New Google
            <br /> Pixel 6 Pro
          </h2>
          <ShopNowButton />
        </div>
        <img
          src="/pixelphone.png"
          alt=""
          className="w-1/2 h-4/5 mt-auto  object-cover"
        />
      </div>
      <div className="bg-gray-100 rounded-md h-full flex items-center">
        <div className="w-1/2 flex justify-center">
          <img
            src="/xiaomiFlip.png"
            alt=""
            className="w-4/5 object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 w-1/2 items-start justify-center">
          <h2 className="text-gray-900 font-semibold text-xl">
            Xiaomi
            <br /> FlipBuds Pro
          </h2>
          <span className="text-secondary-500">$299 USD</span>
          <ShopNowButton />
        </div>
      </div>
    </div>
  );
};

export default HeroGrids;
