"use client";
import React, { useRef } from "react";
import SectionHeading from "./sectionHeading";
import Link from "next/link";
import { useScroll, motion, useTransform } from "framer-motion";

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
        <div className="flex flex-col sm:flex-row gap-3 mx-auto justify-center items-center mb-4 text-base font-normal text-gray-200">
          <Link
            href="#projects"
            className="px-7 py-2 sm:px-10 sm:py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
          >
            View My Work
          </Link>
          <Link
            href="https://mail.google.com/mail/u/0/#inbox"
            className="px-7 py-2 sm:px-10 sm:py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
          >
            Email me
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
