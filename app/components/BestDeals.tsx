import React from "react";
import Link from "next/link";
import DealsGrid from "./DealsGrid";

const BestDeals = () => {
  return (
    <section className="mt-14">
      <div className="head flex flex-col md:flex-row items-center w-full gap-5">
        <h2 className="text-gray-900 text-xl">Best Deals</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm">Deals end in</span>
          <span className="bg-warning-300 text-gray-900 px-3 py-1 text-sm rounded-sm">16d : 21h : 57m : 23s</span>
        </div>
        <Link href="/shop" className="ml-auto flex items-center gap-2">
          <span className="text-sm text-secondary-500">Browse All Product</span>{" "}
          <img src="/ArrowRight.svg" alt="arrow right" className="w-4 h-4"/>
        </Link>
          </div>
          <DealsGrid />
    </section>
  );
};

export default BestDeals;
