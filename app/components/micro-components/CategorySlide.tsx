"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination } from "swiper/modules";

const CategoryCard = ({ name, image }:{name:String, image:string}) => {
  return (
    <div className="flex flex-col items-center gap-4 border border-gray-100 hover:border-gray-300 cursor-pointer p-2 rounded-sm">
      <div className="w-full">
        <Image
          src={image}
          alt={'category image'}
          width={100}
          height={100}
          className="w-full"
          quality={100}
        />
      </div>
      <p className="text-sm text-gray-900"> {name}</p>
    </div>
  );
};

const categories = [
  { id: 1, name: "Computer", image: "/category-6.png" },
  { id: 2, name: "Smartphone", image: "/category-5.png" },
  { id: 3, name: "Headphones", image: "/category-4.png" },
  { id: 4, name: "Accessories", image: "/category-3.png" },
  { id: 5, name: "Camera & Photo", image: "/category-2.png" },
  { id: 6, name: "Tv & Home", image: "/category-1.png" },
];

export default function CategorySlide() {
  const swiperRef = useRef<import('swiper').Swiper | null>(null);

  return (
    <div className="relative">
      {/* Custom Navigation Buttons */}
      <button
        className="bg-primary-500 rounded-full p-2 cursor-pointer absolute top-1/2 -translate-y-1/2 left-0 z-10 -translate-x-1/2 hidden md:block"
        onClick={() => swiperRef.current?.slidePrev()}
        title="Previous Slide"
      >
        <FaArrowLeft className="text-white" />
      </button>
      <button
        className="bg-primary-500 rounded-full p-2 cursor-pointer absolute top-1/2 -translate-y-1/2 right-0 z-10 translate-x-1/2 hidden md:block"
        onClick={() => swiperRef.current?.slideNext()}
        title="Next Slide"
      >
        <FaArrowRight className="text-white" />
      </button>

      {/* Swiper Component */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={15}
        pagination={{ clickable: true }}
        navigation={false} // Disable default navigation
        modules={[Navigation, Pagination]}
        className="mySwiper"
        breakpoints={{
          300: { slidesPerView: 3 }, // 3 items per view on mobile
          750: { slidesPerView: 6 }, // 6 items per view on desktop
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <CategoryCard image={category.image} name={category.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
