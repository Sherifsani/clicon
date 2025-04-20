import React from "react";
import NewsCard from "./micro-components/NewsCard";
import { newsData } from "@/data";

const LatestNews = () => {
  return (
    <div className="mt-10 p-3 md:p-0">
      <h2 className="text-3xl text-gray-900 font-semibold mb-4 text-center">
        Latest News
      </h2>
      <div className="news flex flex-col gap-8 md:flex-row justify-between items-center">
        {newsData.map(({ img, author, date, comments, title, body }, idx) => {
          return (
            <NewsCard
              key={idx}
              img={img}
              author={author}
              date={date}
              comments={comments}
              title={title}
              body={body}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LatestNews;
