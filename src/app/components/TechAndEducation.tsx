import React from "react";
// import SectionWrapper from "../section-wrapper";
import { Badge } from "@/components/Badge";
import { BackgroundGradient } from "@/components/BackgroundGradient";

export const TechAndEducation = () => {
  const techs = [
    "Typescript",
    "Python",
    ".NET",
    "React",
    "Node",
    "NextJs",
    "Azure Cloud Services",
    "React Query",
    "Zustand",
    "Jest",
    "HTML",
    "CSS",
    "MUI",
    "Tailwind",
    "Framer Motion",
    "Figma",
    "Git",
  ];

  const universities = [
    {
      name: "Turku UAS (Finland)",
      degree: "Bachelor in IT",
    },
    {
      name: "Lotus University (Vietnam)",
      degree: "Bachelor in Business Administration",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 pt-20">
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-black">
        <h2 className="text-4xl text-white pl-6">Stack and education</h2>
        <div className="grid gap-4 lg:grid-cols-4 mt-4 p-6">
          <div className="col-span-2 mb-4 lg:mb-0">
            {techs.map((tech) => (
              <Badge key={tech} className="mt-2 mr-2 bg-white text-black">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="col-span-2">
            {universities.map((university) => (
              <div key={university.name}>
                <div className="text-lg font-bold text-white">
                  {university.name}
                </div>
                <div className="flex h-5 items-center space-x-2 text-xs text-neutral-200 mt-1 sm:mt-0">
                  {university.degree}
                </div>
              </div>
            ))}
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
};
