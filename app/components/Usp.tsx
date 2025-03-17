import { div } from "motion/react-client";
import React from "react";

const Usp = () => {
  // data
  const data = [
    {
      img: "/Package.png",
      head: "faster delivery",
      desc: "Delivery in 24h",
    },
    {
      img: "/Trophy.png",
      head: "24 hours return",
      desc: "100% money back guarantee",
    },
    {
      img: "/CreditCard.png",
      head: "secure payment",
      desc: "Your money is safe",
    },
    {
      img: "/Headphones.png",
      head: "support 24/7",
      desc: "Live contact/message",
    },
  ];
  return (
    <div className="mt-8 px-3 md:px-0 w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-5 md:border rounded-md">
        {data.map(({ img, head, desc }, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center justify-center border p-2 gap-4 md:py-5 ${
              idx !== data.length - 1
                ? "border-0 md:border-r"
                : "border-0 md:border-r-0"
            } `}
          >
            <img src={img} alt={`${head} icon`} className="w-10 h-10" />
            <p className="flex flex-col text-center md:items-start">
              <span className="text-gray-900 text-sm font-semibold">
                {head.toUpperCase()}
              </span>
              <span className="text-gray-600 text-[12px]">{desc}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Usp;
