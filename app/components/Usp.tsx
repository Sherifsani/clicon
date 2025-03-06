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
    <div className="flex flex-col items-start md:flex-row w-full mx-3 md:mx-0 flex-wrap justify-between mt-8 rounded-md border py-4 md:py-6 ">
      {data.map(({ img, head, desc }, idx) => (
        <div
          key={idx}
          className={`flex items-center justify-center w-full md:w-1/4 gap-4 ${
            idx !== data.length - 1 ? "md:border-r" : "md:border-r-0"
          } `}
        >
          <img src={img} alt={`${head} icon`} className="w-10 h-10" />
          <p className="flex flex-col items-start">
            <span className="text-gray-900 text-sm font-semibold">
              {head.toUpperCase()}
            </span>
            <span className="text-gray-600 text-[12px]">{desc}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Usp;
