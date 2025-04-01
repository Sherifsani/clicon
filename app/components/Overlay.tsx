import React from "react";
import { BiStar, BiCart } from "react-icons/bi";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const OverlayIcon = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div
      className={`rounded-full w-8 h-8 p-2 ${
        isHovered ? "bg-primary-500 text-white" : "bg-white"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

const Overlay = () => {
  return (
    <div 
      className="absolute top-0 left-0 w-full h-full grid place-items-center rounded-sm bg-gray-400/50"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex gap-1 items-center">
        <OverlayIcon><BiStar /></OverlayIcon>
        <OverlayIcon><BiCart /></OverlayIcon>
        <OverlayIcon><MdOutlineRemoveRedEye /></OverlayIcon>
      </div>
    </div>
  );
};

export default Overlay;
