import Link from "next/link";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ButtonBordered = ({ text }: { text: String }) => {
  return (
    <div className="view-cart">
      <Link
        href="/shop"
        className="flex items-center justify-center gap-2 border-[0.5px] border-primary-500 text-primary-500 bg-white px-6 py-2 rounded-sm"
      >
        <span className="text-[12px] font-semibold uppercase">{text}</span>{" "}
        <HiOutlineArrowNarrowRight />
      </Link>
    </div>
  );
};

export default ButtonBordered;
