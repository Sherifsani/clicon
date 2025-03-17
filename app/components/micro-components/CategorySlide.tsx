"use client"
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const CategoryCard = ({name, image}:{name: string, image: string}) => {
  return (
    <div className="flex flex-col items-center gap-4 border border-gray-100 hover:border-gray-300 cursor-pointer p-2 rounded-sm">
      <div className="w-full">
        <Image src={image} alt="/category-1" width={100} height={100} className="w-full" quality={100}/>
      </div>
      <p className="text-sm text-gray-900"> {name }</p>
    </div>
  );
};

const categories = [
  {
    id: 1,
    name: "Computer",
    image: "/category-6.png",
  },
  {
    id: 2,
    name: "Smartphone",
    image: "/category-5.png",
  },
  {
    id: 3,
    name: "Headphones",
    image: "/category-4.png",
  },
  {
    id: 4,
    name: "Accessories",
    image: "/category-3.png",
  },
  {
    id: 5,
    name: "Camera & Photo",
    image: "/category-2.png",
  },
  {
    id: 6,
    name: "Tv & Home",
    image: "/category-1.png",
  },
  

];

export default function CategorySlide() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={15}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      breakpoints={{
        300: {
          slidesPerView: 3, // 3 items per view on mobile
        },
        750: {
          slidesPerView: 6, // 6 items per view on desktop
        },
      }}
    >{
        categories.map((category) => (

          <SwiperSlide>
            <CategoryCard image={category.image} name={category.name} key={category.id}/>
          </SwiperSlide>
        ))
    }
    </Swiper>
  );
}
