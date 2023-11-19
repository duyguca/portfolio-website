"use client";
import { TypeAnimation } from "react-type-animation";

const HeroTitle = () => {
  return (
    <h1 className="text-white dark:text-gray-700 mb-5 text-4xl lg:text-6xl font-extrabold">
      <span className="block mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {`Hello, I'm.`}
      </span>
      <TypeAnimation
        sequence={["Duygu", 2000, "Front-End Developer", 2000]}
        wrapper="span"
        speed={60}
        style={{
          fontWeight: "light",
          fontSize: "1em",
          display: "block",
        }}
        repeat={Infinity}
      />
    </h1>
  );
};

export default HeroTitle;
