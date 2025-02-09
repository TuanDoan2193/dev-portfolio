import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const data = [
    {
      title: "PwC",
      subTitle: "05/2024 - present",
      url: "https://www.pwc.fi/",
      content: (
        <div className="flex flex-col gap-6 text-neutral-300 text-xs md:text-lg font-normal">
          <p>
            Designed the architecture and led the development of an internal
            audit budgeting solution, effectively reducing development costs by
            <b> three months</b> and increasing the budgeting process efficiency
            by <b>50%</b>.
          </p>
          <p>
            Built and maintained a data platform to efficiently store and
            process data, resulting in an average annual saving of{" "}
            <b>500 hours</b>.
          </p>
          <p>
            Planned and organized knowledge-sharing sessions for multiple teams
            to enhance skills and facilitate discussions on technology-related
            topics.
          </p>
        </div>
      ),
    },
    {
      title: "Alma Media",
      subTitle: "08/2023 - 05/2024",
      url: "https://www.almamedia.fi/",
      content: (
        <div className="flex flex-col gap-6 text-neutral-300 text-xs md:text-lg font-normal">
          <p>
            Built and maintained an end-to-end, large multi-tier SaaS platform
            for vehicle sales, contributing to over $100 million in Consumer
            group revenue annually and maintaining market leadership.
          </p>
          <p>
            Built and maintained an in-house component library used by over{" "}
            <b>120 engineers</b>, unifying the UI across more than{" "}
            <b>8 different applications</b>.
          </p>
          <p>
            Co-designed the front-end architecture to establish a foundational
            set of components and utility functions, accelerating development
            time for future tasks.
          </p>
        </div>
      ),
    },
    {
      title: "Supermetrics",
      subTitle: "09/2021 - 08/2023",
      url: "https://supermetrics.com/",
      content: (
        <div className="flex flex-col gap-6 text-neutral-300 text-xs md:text-lg font-normal">
          <p>
            Developed a Google Sheets add-on application (recommended by Google
            Workspace with over <b>1 million downloads</b>) to help more than{" "}
            <b>200,000 companies across 120 countries</b> improve their data
            flow and reduce manual work, saving over 100 hours of laborious work
            every month.
          </p>
          <p>
            Refactored a legacy codebase into a better-designed structure with a
            newer tech stack, achieving over <b>90% test coverage</b> and
            helping to maintain more than <b>90% customer satisfaction</b> in
            2023.
          </p>
        </div>
      ),
    },
    {
      title: "Hyperin",
      subTitle: "09/2019 - 09/2021",
      url: "https://www.hyperin.com/",
      content: (
        <div className="flex flex-col gap-6 text-neutral-300 text-xs md:text-lg font-normal">
          <p>
            Built and maintained websites and web applications for shopping
            centers, serving over <b>700 million visitors</b> across various
            properties.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a target="_blank" href="https://www.isoomena.fi/">
              <Image
                src="/isoomena.png"
                alt="isoomena"
                width={500}
                height={500}
                objectFit="contain"
                className="rounded-lg object-cover"
              />
            </a>
            <a target="_blank" href="https://malloftripla.fi/">
              <Image
                src="/tripla.png"
                alt="tripla"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto md:px-4" ref={containerRef}>
      <div className="pt-20">
        <h2 className="text-4xl text-white pl-6">Journey timeline</h2>
      </div>

      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-4"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
              </div>
              <div className="hidden md:block md:pl-20 ">
                <a
                  target="_blank"
                  href={item.url}
                  className="text-3xl mb-4 text-left font-bold"
                >
                  {item.title}
                </a>
                <h4 className="text-lg font-bold text-neutral-300">
                  {item.subTitle}
                </h4>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full pt-2">
              <div className="md:hidden block pb-6">
                <a
                  target="_blank"
                  href={item.url}
                  className="text-2xl mb-4 text-left font-bold"
                >
                  {item.title}
                </a>
                <h4 className="text-sm font-bold text-neutral-300">
                  {item.subTitle}
                </h4>
              </div>
              {item.content}
            </div>
          </div>
        ))}
        <div className="h-[100%] absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
