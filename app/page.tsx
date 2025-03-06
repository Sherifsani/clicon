import Image from "next/image";
import React from "react";
import { HeroGrid } from "./components/HeroGrid";
import HeroCard from "./components/micro-components/HeroCard";
import HeroGrids from "./components/HeroGrids";
import Usp from "./components/Usp";
import BestDeals from "./components/BestDeals";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl mt-8">
      <HeroGrids />
      <Usp />
      <BestDeals/>
    </div>
  );
}
