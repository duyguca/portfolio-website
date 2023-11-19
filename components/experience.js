"use client";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 mb-5 ">
      <h3 className=" text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-base text-2xl mt-5 py-7">
        Education & Experience
      </h3>
      <ul className="text-left px-2 sm:ml-[10rem] max-w-[50rem]">
        {experiencesData.map((item, index) => (
          <li
            key={index}
            className=" py-4 px-10 relative border-l-[1px] border-gray-500 dark:text-black"
          >
            <div className="absolute text-4xl top-[1rem] -left-[1.1rem] text-gray-200 dark:text-gray-800 ">
              {item.icon}
            </div>

            <h3 className="text-lg font-base  text-transparent bg-clip-text bg-gradient-to-l from-blue-100 to-cyan-200 dark:text-cyan-900 dark:text-extrabold ">
              {item.title}
            </h3>
            <time className="mb-1 text-sm font-normal leading-none text-gray-200 dark:text-gray-800">
              {item.date}
            </time>
            <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-800">
              {item.location}
            </p>
            <p className="mb-4 text-base font-normal text-gray-200 dark:text-gray-800">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
