import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeSharpOff } from "react-icons/io5";
import ShopNowButton from "./micro-components/ShopNowButton";

const SignInCard = () => {
  return (
    <div className="signin bg-white  absolute bottom-2 right-2 md:right-0 translate-y-full shadow-md rounded-md text-sm w-80 z-50">
      <h2 className="text-center text-900 py-4">Sign in to your account</h2>
      <div className="sign-in-form px-4 pb-5">
        <form action="" className="flex flex-col gap-4">
          <label htmlFor="email" className="text-[12px] flex flex-col gap-2">
            <span>Email Address </span>
            <input
              type="email"
              name="email"
              className="border border-gray-200 p-2 rounded-sm focus:outline-none"
            />
          </label>
          <label htmlFor="password" className="text-[12px] flex flex-col gap-1">
            <span>password </span>
            <span className="flex w-full border border-gray-200 rounded-sm items-center pr-3">
              <input
                type="password"
                name="password"
                className="pwd  p-2  w-full focus:outline-none"
              />
              <IoEyeSharp className="eye text-lg" />
            </span>
          </label>

          <ShopNowButton text="Login" />
        </form>
        <div className="flex items-center">
          <hr />
          Don't have an account
          <hr />
        </div>
      </div>
    </div>
  );
};

export default SignInCard;
