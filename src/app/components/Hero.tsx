import { FloatingDock } from "@/components/FloatingDock";
import { Spotlight } from "@/components/Spotlight";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import React from "react";
import { Oxanium } from "next/font/google";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const Hero = () => {
  const links = [
    {
      title: "Mail",
      icon: <IconMail className="h-full w-full text-neutral-300" />,
      href: "mailto:tuan.doan2193@gmail.com",
    },

    {
      title: "Linkedin",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-300" />,
      href: "https://www.linkedin.com/in/tuan-doan-161673105/",
    },
    {
      title: "Github",
      icon: <IconBrandGithub className="h-full w-full text-neutral-300" />,
      href: "https://github.com/TuanDoan2193",
    },
  ];

  return (
    <div className="h-[30rem] w-full bg-black bg-grid-white/[0.1] relative flex items-center justify-center overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <Spotlight />
      <div className="w-full flex flex-col justify-center items-center text-center">
        <h1 className={`text-7xl ${oxanium.className}`}>Tuan Doan</h1>
        <div className={`text-2xl font-bold pl-2 ${oxanium.className}`}>
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
