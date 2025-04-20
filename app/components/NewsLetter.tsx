import React from "react";
import ShopNowButton from "./micro-components/ShopNowButton";

const NewsLetter = () => {
  const images = ["google", "amazon", "philips", "toshiba", "samsung"];
  return (
    <div className="w-screen bg-secondary-600 flex items-center justify-center py-6 md:py-10 px-4">
      <div className="newsletter flex flex-col items-center gap-4">
        <h2 className="text-white font-semibold text-3xl text-center">
          Subscribe to our newsletter
        </h2>
        <p className="text-white text-center text-sm">
          Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
          libero et
          <br /> cursus. Donec non quam urna. Quisque vitae porta ipsum.
        </p>
        <div className="input flex gap-2 bg-white justify-between p-2 rounded-sm shadow-sm w-full">
          <input
            type="email"
            placeholder="Email address"
            className="p-2 text-gray-600 text-sm focus:outline-none"
          />
          <ShopNowButton text="SUBSCRIBE" />
        </div>
        <div className="bg-gray-50 w-4/5 h-[1px] opacity-50 mt-5"/>
        <div className="flex items-center gap-6">
          {images.map((img, idx) => {
            return (
              <img
                key={idx}
                src={`/${img}.png`}
                alt=""
                className="object-cover"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
