import React, { Fragment } from "react";
// import { motion } from "framer-motion";
import TransitionEffect from "@/components/transitionEffect";
import SectionHeading from "@/components/sectionHeading";

import { projectsData } from "@/lib/data";
import ProjectCard from "@/components/projectCard";
import ThemeContextProvider from "@/components/themeContext";

const Projects = () => {
  return (
    <div className="pt-4 flex min-h-screen flex-col overflow-hidden bg-[#121212] px-4 py-2 text-white  dark:bg-purple-100 dark:text-gray-900  ">
      <div className="container max-w-[60rem] mx-auto"></div>

      <TransitionEffect />
      <SectionHeading>Projects</SectionHeading>
      <h1 className="text-center sm:p-10 w-full sm:w-[50%] mx-auto">
        Explore a selection of my past projects, get to know my approach in
        different contexts, and join me on the journey of continual learning and
        development insights
      </h1>
      <div>
        {projectsData.map((project, i) => (
          <React.Fragment key={i}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Projects;
