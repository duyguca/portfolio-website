import React from "react";
import Link from "next/link";

const Button = ({ children, href }) => {
  return (
    <div className="">
      <Link
        href={`${href}`}
        className="text-sm sm:text-lg px-7 py-2 sm:px-10 sm:py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 	border border-white "
      >
        {children}
      </Link>
    </div>
  );
};

export default Button;
