"use client";
import React, { useRef } from "react";
import SectionHeading from "./sectionHeading";
import Link from "next/link";
import { useScroll, motion, useTransform } from "framer-motion";
import Button from "./Button";

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      id="contact"
      className="scroll-mt-28 sm:my-[15rem] flex flex-col overflow-hidden text-white  "
    >
      <div className="container">
        <SectionHeading>Get in Touch.</SectionHeading>
        <p className="text-center mb-10 dark:text-gray-900">
          {`I'm open to new challenges and opportunities. Please email me if you'd
          like to chat.`}
        </p>
        <div className="flex flex-col sm:flex-row gap-[2rem] mx-auto justify-center items-center mb-4 text-base font-normal text-gray-200">
          <Button href="#projects">View My Works</Button>

          <Button href="mailto:duygukoksalca@gmail.com">Contact me</Button>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
