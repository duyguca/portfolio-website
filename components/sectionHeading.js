import React from "react";

function SectionHeading({ children }) {
  return (
    <h2 className="text-3xl sm:mt-[5rem] text-center sm:text-5xl font-bold py-8 tracking-widest leading-[4.5rem]  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
      {children}
    </h2>
  );
}

export default SectionHeading;
