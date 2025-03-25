import React from "react";
import Image from "next/image";
import ShopNowButton from "./micro-components/ShopNowButton";

const FeaturedCard = () => {
  return (
    <div className="bg-warning-300 flex flex-col justify-between rounded-sm overflow-hidden">
      <div className="flex flex-col p-3 justify-center items-center gap-3">
        <h3 className="text-danger-600 text-[12px] font-semibold">
          COMPUTER & ACCESSORIES
        </h3>
        <p className="text-2xl">32% DISCOUNT</p>
        <p className="text-gray-700">For all electronic products</p>
        <div className="text-gray-900 text-[12px] flex items-center gap-1 ">
          Offer ends in<span className="bg-white p-2 font-semibold">END OF EASTER</span>
        </div>
        <ShopNowButton />
      </div>
      <Image
        src="/featured-8.png"
        alt="featured"
        width={100}
        height={100}
        quality={100}
        className="h-3/5 w-full mt-auto"
      />
    </div>
  );
};

export default FeaturedCard;
