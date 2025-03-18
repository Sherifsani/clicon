import React from "react";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ShopNowButton = ({ text }: { text?: string }) => {
  return (
    <Link
      href="/shop"
      className="flex items-center justify-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-sm"
    >
      <span className="text-[12px] font-semibold">{text && text || "SHOP NOW"}</span>{" "}
      <HiOutlineArrowNarrowRight />
    </Link>
  );
};

export default ShopNowButton;
