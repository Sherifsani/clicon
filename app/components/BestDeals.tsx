"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import DealsGrid from "./DealsGrid";

const BestDeals = () => {
  // Initial time: 16 days, 21 hours, 57 minutes, 23 seconds
  const initialTime = 16 * 86400 + 21 * 3600 + 57 * 60 + 23;
  const [totalSeconds, setTotalSeconds] = useState(initialTime);

  useEffect(() => {
    if (totalSeconds <= 0) return; // Stop if timer reaches 0

    const timer = setInterval(() => {
      setTotalSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [totalSeconds]);

  // Convert seconds to days, hours, minutes, and seconds
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <section className="mt-14 w-full px-4 md:px-0">
      <div className="head flex flex-col md:flex-row items-center w-full gap-5 mb-5">
        <h2 className="text-gray-900 text-xl font-semibold">Best Deals</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm">Deals end in</span>
          <span className="bg-warning-300 timer text-gray-900 px-3 py-1 text-sm rounded-sm">
            {`${days}d : ${hours.toString().padStart(2, "0")}h : ${minutes
              .toString()
              .padStart(2, "0")}m : ${seconds.toString().padStart(2, "0")}s`}
          </span>
        </div>
        <Link href="/shop" className="ml-auto flex items-center gap-2">
          <span className="text-sm text-secondary-500">
            Browse All Products
          </span>
          <img src="/ArrowRight.svg" alt="arrow right" className="w-4 h-4" />
        </Link>
      </div>
      <DealsGrid />
    </section>
  );
};

export default BestDeals;
