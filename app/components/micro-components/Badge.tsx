import React from "react";

const Badge = ({
  position,
  color,
  text,
  textColor,
}: {
  position: String;
  color: String;
  text: String;
  textColor: String;
}) => {
  return (
    <div
      className={`${color} ${position} rounded-sm px-2 py-1 text-[10px] absolute top-1 z-10`}
    >
      <p className={`${textColor}`}>{text}</p>
    </div>
  );
};

export default Badge;
 