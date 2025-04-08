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

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl mt-8 mb-[200px] ">
      <HeroGrids />
      <Usp />
      <BestDeals />
      <Category />
      <FeaturedProducts/>
      <MidSectionBanner/>
    </div>
  );
}
