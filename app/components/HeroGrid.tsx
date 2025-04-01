import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/app/components/ui/bento-grid";
import Overlay from "./Overlay";

export function HeroGrid() {
  return (
    <BentoGrid className="">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          stars={item.stars}
          ratings={item.ratings}
          price={item.price}
          img={item.img}
          // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "TTOZO T6 True Wireless Earbuds Bluetooth Headphone",
    stars: 5,
    ratings: 765,
    price: 70,
    header: <Skeleton />,
    img: "featured-1.png",
  },
  {
    title: "TTOZO T6 True Wireless Earbuds Bluetooth Headphone",
    stars: 4,
    ratings: 550,
    price: 2300,
    header: <Skeleton />,
    img: "featured-2.png",
  },
  {
    title: "TTOZO T6 True Wireless Earbuds Bluetooth Headphone",
    stars: 5,
    ratings: 500,
    price: 170,
    header: <Skeleton />,
    img: "featured-3.png",
  },
  {
    title: "TTOZO T6 True Wireless Earbuds Bluetooth Headphone",
    stars: 5,
    ratings: 75,
    price: 110,
    header: <Skeleton />,
    img: "featured-4.png",
  },
  {
    title: "TTOZO T6 True Wireless Earbuds Bluetooth Headphone",
    stars: 5,
    ratings: 25,
    price: 410,
    header: <Skeleton />,
    img: "featured-1.png",
  },
  {
    title: "TTOZO T6 True Wireless Earbuds Bluetooth Headphone",
    stars: 2,
    ratings: 345,
    price: 560,
    header: <Skeleton />,
    img: "featured-5.png",
  },
  {
    title: "TTOZO T6 True Wireless Earbuds Bluetooth Headphone",
    stars: 5,
    ratings: 1084,
    price: 100,
    header: <Skeleton />,
    img: "featured-7.png",
  },
  {
    title: "TTOZO T6 True Wireless Earbuds Bluetooth Headphone",
    stars: 3,
    ratings: 75,
    price: 80,
    header: <Skeleton />,
    img: "featured-6.png",
  },
];
