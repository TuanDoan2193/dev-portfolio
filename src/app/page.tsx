"use client";

import { Oxanium } from "next/font/google";
import { Experience, Hero } from "./components";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Home() {
  return (
    <div className={oxanium.className}>
      <Hero />
      <Experience />
      <Hero />
      <Hero />
      <Hero />
    </div>
  );
}
