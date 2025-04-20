import React from "react";
import { FaCalendar, FaUser, FaComment } from "react-icons/fa6";

interface NewsCardProps {
  img: string;
  author: string;
  date: string;
  comments: number;
  title: string;
  body: string;
}

const NewsCard = ({
  img,
  author,
  date,
  comments,
  title,
  body,
}: NewsCardProps) => {
  return (
    <div className="bg-gray-100 flex flex-col items-center gap-3 p-5 shadow-md">
      <div className="img">
        <img src={`/${img}`} alt="" className="rounded-md" />
      </div>
      <div className="sub-title flex gap-5 text-gray-700 items-start w-full ">
        <p className="flex gap-1 items-center">
          <FaUser className="text-primary-500 " />
          {author}
        </p>
        <p className="flex gap-1 items-center">
          <FaCalendar className="text-primary-500" />
          {date}
        </p>
        <p className="flex gap-3 items-center">
          <FaComment className="text-primary-500" />
          {comments}
        </p>
      </div>
      <h3 className="text-gray-900 font-semibold text-lg">{title}</h3>
      <p className="text-gray-500">{body}</p>
    </div>
  );
};

export default NewsCard;
