import React from "react";
import HighlightedText from "@/app/components/micro-components/HighlightedText";
import Link from "next/link";

const FlashBanner = () => {
  return (
    <div className="w-full bg-gray-900 py-2 px-2 flex items-center gap-2">
      <div className="w-full max-w-5xl mx-auto flex justify-between items-center">
        <HighlightedText />
        <p className="text-white text-[10px] md:text-sm">
          up to{" "}
          <span className="text-warning-500 text-lg md:text-xl font-semibold">59% </span>
          <span>OFF</span>
        </p>
        <Link
          href="/shop/"
          className="text-[10px] md:text-sm bg-warning-500 text-gray-900 p-1 flex items-center"
        >
          SHOP NOW{" "}
          <img src="/ArrowRight.svg" alt="" className="w-5 h-5 md:w-5 md:h-5" />
        </Link>
      </div>
      <div className="bg-gray-nil p-1">
        <img src="/X.svg" alt="" />
      </div>
    </div>
  );
};

export default FlashBanner;
