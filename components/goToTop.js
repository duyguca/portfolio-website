"use client";
import { BsArrowUpCircle } from "react-icons/bs";
import React from "react";
import Link from "next/link";

const goToTop = () => {
  return (
    <Link
      className="text-white text-3xl fixed bottom-[5rem] right-5 sm:right-8 z-999"
      href="/"
    >
      <BsArrowUpCircle />
    </Link>
  );
};

export default goToTop;
