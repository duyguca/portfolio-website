"use client";
import ProjectCard from "./projectCard";
import React, { useState } from "react";
import Link from "next/link";
import SectionHeading from "./sectionHeading";
import { projectsData } from "@/lib/data";
import TabButton from "./tabButton";
import Button from "./Button";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (id) => {
    setActiveTab(id);
  };
  console.log({ projectsData });

  return (
    <section
      id="projects"
      className=" mx-auto sm:scroll-mt-28 sm:mb-28 sm:mt-[30rem]"
    >
      <SectionHeading>My Projects</SectionHeading>

      <div className="flex flex-row justify-center gap-3 text-md sm:text-2xl mb-4 sm:mb-[2rem] ">
        <TabButton
          utton
          selectTab={() => handleTabChange("all")}
          active={activeTab === "all"}
        >
          All Projects
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("featured")}
          active={activeTab === "featured"}
        >
          Featured Projects{" "}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("fun")}
          active={activeTab === "fun"}
        >
          Fun Projects{" "}
        </TabButton>
      </div>

      <div>
        {activeTab === "all"
          ? projectsData.map((project, i) => (
              <React.Fragment key={i}>
                <ProjectCard {...project} />
              </React.Fragment>
            ))
          : projectsData
              .filter((project) => project.cat === activeTab)
              .map((project, i) => (
                <React.Fragment key={i}>
                  <ProjectCard {...project} />
                </React.Fragment>
              ))}
      </div>
      <div className="text-center">
        <Button href="/projects">See more projects</Button>
      </div>
    </section>
  );
}
