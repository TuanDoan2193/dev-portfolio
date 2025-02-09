import { FloatingDock } from "@/components/FloatingDock";
import { Spotlight } from "@/components/Spotlight";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import React from "react";

export const Hero = () => {
  const links = [
    {
      title: "Mail",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:tuan.doan2193@gmail.com",
    },

    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/tuan-doan-161673105/",
    },
    {
      title: "Github",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/TuanDoan2193",
    },
  ];

  return (
    <div className="h-[30rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative flex items-center justify-center overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <Spotlight />
      <div className="w-full flex flex-col justify-center items-center text-center">
        <h1 className="text-7xl font-[Oxanium]">Tuan Doan</h1>
        <div className="text-2xl font-bold font-[Oxanium] pl-2">
          Software Engineer
        </div>
        <div className="text-lg text-neutral-200 pt-10 pl-2 pb-20">
          I craft digital experiences and transform ideas into scalable and
          maintainable applications
        </div>
        <FloatingDock items={links} />
      </div>
    </div>
  );
};

export default Hero;
