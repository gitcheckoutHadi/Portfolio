import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import { ProjectsData } from "./ProjectData";
import ProjectsCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
          key={"ccc"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {ProjectsData.map((project) => (
          <ProjectsCard
            item={{
              key: project.id,
              title: project.title,
              des: project.description,
              src: project.src,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
