"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { links } from "@/lib/data";
import { usePathname } from "next/navigation";

const Header = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const pathname = usePathname();

  useEffect(() => {
    pathname.includes("projects") && setActiveSection("Projects");
  }, [pathname]);

  return (
    <header className="z-[999] text-center relative">
      <div className="fixed border-none bottom-0 left-0 right-0 min-w-[430px] sm:left-1/2 sm:-translate-x-1/2 h-[3rem] rounded-none border  bg-gradient-to-b from-purple-400 to-pink-600 sm:top-6 sm:h-[3.25rem] w-full sm:w-[30rem] md:w-[40rem] sm:rounded-full"></div>
      <nav className="fixed h-[3rem] sm:h-[3.25rem] sm:w-[40rem] border-none bottom-0 left-0 right-0  sm:left-1/2 sm:-translate-x-1/2 py-2 sm:top-[25px] sm:py-0 flex justify-center items-center">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[1rem] sm:text-[1.1rem] font-medium  sm:w-[initial] sm:flex-nowrap sm:gap-5 text-white">
          {links.map((link) => (
            <li key={link.hash} onClick={() => setActiveSection(link.name)}>
              <Link
                href={link.hash}
                className={`flex px-3 items-center justify-center relative transition ${
                  activeSection === link.name ? "text-gray-900" : null
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
