import Image from "next/image";
import React from "react";
import { HeroGrid } from "./components/HeroGrid";
import HeroCard from "./components/micro-components/HeroCard";
import HeroGrids from "./components/HeroGrids";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl mt-8">
      {/* <HeroGrid /> */}
      <HeroGrids />
    </div>
  );
}
