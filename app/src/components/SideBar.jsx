import React from "react";
import { useAtom } from "jotai";
import { projectsAtom } from "../states/Project";
import Project from "./Project";
import { Icon } from "@iconify/react";

const SideBar = () => {
  const [projects, setProjects] = useAtom(projectsAtom);

  return (
    <>
    <div className="w-64 bg-theme-secondary text-theme-bg py-4">
        <h1 className="text-md sm:text-2xl font-semibold text-center">Your Projects</h1>
        <hr className="mt-4border-gray-600 bg-black" />
        <div className="flex flex-col gap-6 mt-8">
          {projects.map((project) => (
            <Project key={project.id} title={project.title} id={project.id} />
          ))}
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-center gap-2 md:gap-3 lg:gap-4 border border-dotted border-theme-primary py-2 rounded mx-2">
            <h1 className="text-center">Add New Project</h1>
          </div>
        </div>
    </div>
    </>
  );
};

export default SideBar;
