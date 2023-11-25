import Link from "next/link";
import React from "react";
import { PiLinkedinLogoLight, PiGithubLogo } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#121212] dark:bg-gradient-to-b from-purple-400 to-pink-600 border-t border-gray-500/50 pb-[3rem] sm:pb-0">
      <div className="flex flex-col sm:flex-row mx-5rem text-md justify-around items-center sm:text-lg text-gray-200 font-light leading-10 px-5 py-10">
        <p className="pb-4">&copy; Duygu Koksal 2023</p>
        <div className="flex gap-5 justify-start items-center ">
          <Link
            className="hover:scale-110 hover:text-purple-400 transition "
            href="https://www.linkedin.com/in/duygukoksalca/"
          >
            <PiLinkedinLogoLight className="text-3xl" />
          </Link>
          <Link
            className="hover:scale-110 hover:text-purple-400 transition"
            href="https://github.com/duyguca/"
          >
            <PiGithubLogo className="text-3xl"></PiGithubLogo>
          </Link>
          <Link
            className="hover:scale-110 hover:text-purple-400 transition"
            href="mailto:duygukoksalca@gmail.com"
          >
            <AiOutlineMail className="text-3xl"></AiOutlineMail>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
