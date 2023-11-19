"use client";
import React, { useRef } from "react";
import SectionHeading from "./sectionHeading";
import { skillsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import Experience from "@/components/experience";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // console.log("duygu", { skillsData });

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="flex flex-col text-md  sm:scroll-mt-28 justify-center items-center text-left
      sm:text-center sm:text-lg text-gray-200  leading-10 
      sm:mb-[10rem] w-full h-full"
      id="about"
    >
      <SectionHeading>About</SectionHeading>

      <div className="sm:block w-full sm:w-[40%] min-w-[600px] px-[8rem] sm:px-0">
        <Image
          src="/image/math-code.png"
          layout="responsive"
          width={400}
          height={400}
          alt="Math and code photo"
          className="w-[30%] mx-2 rounded-3xl"
        />
      </div>
      <p className=" py-4 text-center font-normal text-base tracking-wider dark:text-black">
        {`Welcome! My name is Duygu. I am a former high school math teacher turned
        Front-End Web Developer based in Vancouver, Canada. My journey from
        teaching to technology has been remarkable. With a strong math
        background and a \"never give up\" mindset, I specialize in React,
        Next.js, and Tailwind CSS to create clean, user-friendly web designs.
        I'm passionate about crafting seamless web experiences and eager to
        collaborate on meaningful tech projects.
        <br />
        During my leisure hours, I relish quality time with my loved ones.
        Whether it's gathering around a deliciously prepared dinner table or
        venturing out to explore the wonders of nature, these moments hold a
        special place in my heart.`}
      </p>

      <div className="text-gray-200 ">
        <h3 className=" text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-base text-2xl mt-5 py-7">
          Skills
        </h3>
        <ul className="flex flex-wrap items-center justify-center gap-8">
          {skillsData.map((item, i) => {
            return (
              <li className="list-none group" key={`${item.skill}-${i}`}>
                <span className=" flex items-center justify-center text-2xl sm:text-4xl group-hover:scale-125 transition duration-300  dark:text-black">
                  {item.icon}
                </span>
                <span className=" dark:text-black">{item.skill}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <Experience />
    </motion.section>
  );
};

export default About;
