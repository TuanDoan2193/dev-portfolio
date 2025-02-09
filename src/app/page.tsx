"use client";

import { Experience, Hero, TechAndEducation } from "./components";
import { TextHoverEffect } from "@/components/TextHoverEffect";
import { Oxanium } from "next/font/google";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="pb-10 md:pb-40">
        <Hero />
        <Experience />
        <TechAndEducation />
      </div>
      <div className="h-[20rem] flex items-center justify-center">
        <TextHoverEffect text={`@ ${year}`} />
      </div>
    </div>
  );
}
