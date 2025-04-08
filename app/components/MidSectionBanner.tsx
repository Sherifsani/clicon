import React from "react";
import Badge from "./micro-components/Badge";
import ShopNowButton from "./micro-components/ShopNowButton";
import { div } from "motion/react-client";

const MidSectionBanner = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-4">
      <Homepod />
      <Xiaomi />
    </div>
  );
};

const Homepod = () => {
  return (
    <div className="flex justify-between bg-gray-50 rounded-md px-8 py-4">
      <Badge
        color="bg-primary-500"
        position="left-0"
        text="INTRODUCING"
        textColor="text-white"
      />
      <div className="text w-1/2 flex flex-col justify-center gap-2 items-start">
        <h2 className="text-xl text-gray-900">New Apple<br/> HomePod Mini</h2>
        <p className="text-gray-700 text-sm">Jam-packed with innovation, HomePod mini delivers unexpectedly.</p>
        <ShopNowButton text=""/>
      </div>
      <div className="img p-4">
        <img src="/homepod-banner.png" alt="homepod" />
      </div>
    </div>
  );
};

const Xiaomi = () => {
  return (
    <div className="bg-gray-900 flex justify-between rounded-md">
      <Badge
        color="bg-warning-400"
        position="left-0"
        text="INTRODUCING NEW"
        textColor="text-gray-900"
      />
      <div className="text w-1/2 flex flex-col justify-center gap-2 items-start p-4">
        <h2 className="text-xl text-white">
          Xiaomi Mi 11 Ultra
          <br /> 12GB+256GB
        </h2>
        <p className="text-gray-300 text-sm">
          *Data provided by internal laboratories. Industry measurement.
        </p>
        <ShopNowButton text="" />
      </div>
      <div className="img mt-auto">
        <img src="/phone-banner.png" alt="xiaomi" />
      </div>
    </div>
  );
}
export default MidSectionBanner;
