import { Spotlight } from "@/components/Spotlight";
import React from "react";

export const Hero = () => {
  return (
    <div className="h-[30rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <Spotlight />
      <div className="w-full flex flex-col justify-center items-center text-center">
        <h1 className={`text-7xl`}>Tuan Doan</h1>
        <div className={`text-2xl font-bold pl-2`}>Software Engineer</div>
        <div className="text-md text-neutral-300 pt-10 pl-2">
          I craft digital experiences and transform ideas into scalable and
          maintainable applications.
        </div>
      </div>
    </div>
  );
};

export default Hero;
