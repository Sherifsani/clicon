import React from "react";

const Badge = ({
  position,
  color,
  text,
}: {
  position: String;
  color: String;
  text: String;
}) => {
  return (
    <div className={`${color} ${position} rounded-sm px-2 py-1 text-[10px] absolute top-1`}>
      <p>{text}</p>
    </div>
  );
};

export default Badge;
