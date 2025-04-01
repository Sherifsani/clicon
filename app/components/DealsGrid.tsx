import React from "react";
import { BiStar, BiHeart, BiCart } from "react-icons/bi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Badge from "./micro-components/Badge";
import Overlay from "./Overlay";

const data = [
  {
    image: "drone.png",
    description:
      "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
    price: "$2,300",
    badge: "SOLD OUT",
  },
  {
    image: "phone4g.png",
    description: "Simple Mobile 4G LTE Prepaid Smartphone",
    price: "$220",
  },
  {
    image: "controller.png",
    description: "4K UHD LED Smart TV with Chromecast Built-in",
      price: "$150",
    badge:"19% OFF"
  },
  {
    image: "dellPhone.png",
    description: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price: "$299",
  },
  {
    image: "portable.png",
    description: "Portable Wshing Machine, 11lbs capacity Model 18NMFIAM",
    price: "$70",
  },
  {
    image: "monitor.png",
    description: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
    price: "$160",
  },
  {
    image: "camera.png",
    description: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black",
    price: "$250",
  },
  {
    image: "camera.png",
    description: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black",
    price: "$250",
  },
];

interface GridCardProps {
  image: string;
  description: string;
  price: string;
  badge?: string;
  prevPrice?: string;
}

const GridCard = ({
  image,
  description,
  price,
  badge,
  prevPrice,
}: GridCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="flex flex-col p-2 w-full h-full border-[.5px] justify-between items-center relative cursor-pointer hover:border-gray-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {badge && (
        <Badge
          text={badge}
          color="bg-gray-400"
          textColor="text-white"
          position="left-1"
        />
      )}
      <div className="img relative">
        {isHovered && <Overlay />}
        <img src={`/${image}`} alt="" />
      </div>
      <div>
        <p className="text-[12px] text-gray-900">{description}</p>
        <span className="text-secondary-500 text-sm">{price}</span>
      </div>
    </div>
  );
};

const DealsGrid = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0">
      <div className="row-span-2 flex flex-col gap-3 relative p-2 h-full border-[.5px] justify-between">
        <Badge
          text="32% OFF"
          position="left-1"
          color="bg-warning-400"
          textColor="text-gray-900"
        />
        <Badge
          text="HOT"
          position="left-1 translate-y-full mt-1"
          color="bg-danger-500"
          textColor="text-gray-100"
        />
        <img src="/playstation.png" alt="" className="" />
        <div className="desc flex flex-col gap-1">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <BiStar key={i} className="text-warning-500" />
            ))}
            <span className="text-gray-500 text-[12px]">(52,677)</span>
          </div>
          <h3 className="text-sm text-gray-900 text-ellipsis">
            Xbox Series S - 512GB SSD Console with Wireless Controller - EU
            Version
          </h3>
          <div>
            <s className="text-gray-300 text-[12px] mr-1">$865.99</s>
            <span className="text-secondary-500">$442.12</span>
          </div>
          <div>
            <p className="text-[12px] text-gray-600">
              Games built using the Xbox Series X|S development kit showcase
              unparalleled load times, visuals.
            </p>
          </div>
        </div>
        <div className="flex w-full gap-2 justify-between">
          <div className="bg-primary-100 w-8 h-8 grid place-items-center rounded-sm">
            <BiHeart className="text-gray-900 bg-primary-100" />
          </div>
          <p className="text-white bg-primary-500 text-[10px] flex items-center justify-center gap-1 w-3/5 px-2 py-1 rounded-sm">
            <BiCart className="text-base" /> ADD TO CART
          </p>
          <div className="bg-primary-100 w-8 h-8 grid place-items-center rounded-sm">
            <MdOutlineRemoveRedEye className="text-gray-900" />
          </div>
        </div>
      </div>
      {data.map(({ image, description, price, badge }, idx) => (
          <GridCard image={image} description={description} price={price} badge={ badge} key={idx} />
      ))}
    </div>
  );
};

export default DealsGrid;
