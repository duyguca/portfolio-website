import Image from "next/image";
import Button from "./Button";
import HeroTitle from "./heroTitle";

const HeroSection = () => {
  return (
    <section className="px-[1rem] flex items-center h-[65vh] mx-auto mt-[7rem] mb-[15rem] sm:my-[10rem] ">
      <div className="w-full flex flex-col-reverse gap-[4rem] sm:gap-0 justify-center items-center sm:flex-row">
        <div className="w-[70%] lg:text-left">
          <HeroTitle />
          <p className="text-[#ADB7BE] dark:text-gray-500 text-md mb-8 lg:text-xl ">
            based in Vancouver, Canada.
          </p>
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-2">
            <Button href="mailto:duygukoksalca@gmail.com">Contact me</Button>
            <Button href="#projects">See My Projects</Button>
          </div>
        </div>
        <div className="w-[50%] sm:w-[30%] bg-gradient-to-r from-purple-400 via-blue-400 to-pink-600 rounded-full">
          <Image
            src="/image/my-img.png"
            layout="responsive"
            width={400}
            height={400}
            alt="My photo"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
