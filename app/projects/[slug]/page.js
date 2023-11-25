import Button from "@/components/Button";
import Subheading from "@/components/Subheading";
import SectionHeading from "@/components/sectionHeading";
import TransitionEffect from "@/components/transitionEffect";
import { projectsData } from "@/lib/data";
import MyAccordion from "@/components/accordion";
import Image from "next/image";
import Link from "next/link";
import MyCodeBlock from "@/components/codeBlock";

export default function Page({ params }) {
  const currentData = projectsData.find(
    (project) => project.slug === params.slug
  );
  console.log("currentData", { currentData });
  // Find the index of the current project in the projectsData array
  const currentIndex = projectsData.findIndex(
    (project) => project.slug === params.slug
  );
  const previousProject = projectsData[currentIndex - 1];
  const nextProject = projectsData[currentIndex + 1];

  const previousProjectLink = previousProject
    ? `/projects/${previousProject.slug}`
    : null;

  const nextProjectLink = nextProject ? `/projects/${nextProject.slug}` : null;
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-[#121212] px-4 text-white dark:bg-purple-100 dark:text-gray-900   ">
      <TransitionEffect />
      <SectionHeading>{currentData.title}</SectionHeading>
      <div className=" mb-16">
        <Image
          src={currentData.imageUrl}
          alt="Project I worked on"
          quality={95}
          className=" w-full sm:max-w-[50%] mx-auto my-1"
        />
      </div>
      <div className="container max-w-[60rem] mx-auto text-gray-200 dark:text-gray-900 ">
        <Subheading>Project Overview</Subheading>
        <p className="py-10 px-2 text-sm sm:text-xl font-light">
          {currentData.overview}
        </p>

        <Subheading>Tool I Used</Subheading>
        <div className="my-4">
          {currentData.tags.map((tag, i) => (
            <span className="px-2 text-xl" key={i}>
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center my-16">
          <Button href="https://duygukoksal.com/movie-app/">Live Site</Button>
          <Button href="https://github.com/duyguca/movie-app/">GitHub</Button>
        </div>
        <MyAccordion currentData={currentData} />
      </div>
      <div className="flex justify-around gap-10 mb-4">
        {previousProjectLink && (
          <Link
            className="text-sm sm:text-md px-7 py-2 sm:px-10 sm:py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 	border border-white "
            href={previousProjectLink}
          >
            Previous
          </Link>
        )}
        {nextProjectLink && (
          <Link
            className="text-sm sm:text-md px-7 py-2 sm:px-10 sm:py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 	border border-white "
            href={nextProjectLink}
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
}
