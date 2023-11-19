"use client";
import { useRef } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  slug,
  liveSite,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  console.log({ title, description, tags, imageUrl, slug, liveSite });
  return (
    <motion.div
      className="mb-5 p-1 sm:p-3 sm:mb-12 bg-white flex flex-col sm:flex-row  justify-between items-center rounded-3xl group-hover:scale-110 max-w-[50rem] mx-auto "
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <div className="sm:w-[60%] ">
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="rounded-3xl shadow-2xl transition"
        />
      </div>{" "}
      <div className="py-4 px-5 sm:w-[50%]  h-full flex flex-col items-start justify-center">
        <h3 className="text-2xl font-bold pb-4 text-gray-900">{title}</h3>
        <p className=" leading-relaxed text-gray-700 font-">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2">
          {tags.map((tag, i) => (
            <li
              className=" shadow-lg bg-purple-400 bg-opacity-20 border-b  px-3 py-1 text-[0.7rem] uppercase tracking-wider text-black font-bold rounded-full"
              key={i}
            >
              {tag}
            </li>
          ))}
        </ul>
        <ul className=" cursor-pointer flex flex-col sm:flex-row items-start justify-start sm:items-end gap-5 pt-8 text-gray-700">
          <li className="border-b-2 border-purple-400 hover:border-pink-600 hover:text-black hover:scale-105 hover:font-base hover:transition-all">
            <Link href={liveSite}>Live Site</Link>
          </li>
          <li className="border-b-2 border-purple-400 hover:border-pink-600 hover:text-black hover:scale-105 hover:font-base hover:transition-all">
            <Link href={`https://github.com/duyguca/${slug}`}>GitHub</Link>
          </li>
          <li className="border-b-2 border-purple-400 hover:border-pink-600 hover:text-black hover:scale-105 hover:font-base hover:transition-all">
            <Link href={`/projects/${slug}`}> More Details&#8599;</Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
