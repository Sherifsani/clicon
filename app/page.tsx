import Image from "next/image";
import React from "react";
import { HeroGrid } from "./components/HeroGrid";
import HeroCard from "./components/micro-components/HeroCard";
import HeroGrids from "./components/HeroGrids";
import Usp from "./components/Usp";
import BestDeals from "./components/BestDeals";
import Category from "./components/Category";
import FeaturedProducts from "./components/FeaturedProducts";
import MidSectionBanner from "./components/MidSectionBanner"
import ComputerAccessories from "./components/ComputerAccessories";
import MacBookBanner from "./components/MacBookBanner";
import LatestNews from "./components/LatestNews";
import NewsLetter from "./components/NewsLetter";

export default function Home() {
  return (
    <>
    <div className="mx-auto max-w-7xl mt-8 mb-10 flex flex-col gap-7">
      <HeroGrids />
      <Usp />
      <BestDeals />
      <Category />
      <FeaturedProducts/>
      <MidSectionBanner />
      <ComputerAccessories />
      <MacBookBanner />
      <LatestNews />
      </div>
      <NewsLetter/>
    </>
  );
}
