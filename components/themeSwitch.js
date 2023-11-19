"use client";

import { useTheme } from "@/components/themeContext";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed top-5 right-5 sm:right-8 bg-gradient-to-r from-purple-400 to-pink-600 w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem]  backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:text-white"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
