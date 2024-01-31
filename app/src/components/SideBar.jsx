import React, { useState } from "react";
import { useAtom } from "jotai";
import { projectsAtom } from "../states/Project";
import Project from "./Project";
import { Icon } from "@iconify/react";
import AddProject from "../ui/AddProject";
import axios from "axios";

const SideBar = () => {
  const [projects, setProjects] = useAtom(projectsAtom);
  const [isAddingProject, setIsAddingProject] = useState(false);

  const HandleCancel = () => {
    setIsAddingProject(false);
  };

  const HandleAdd = async (project) => {
    setIsAddingProject(false);
    let newProject = await axios.post("http://localhost:3000/project", project);
    setProjects([...projects, newProject.data]);
  };

  return (
    <>
      <div className="w-64 bg-theme-secondary text-theme-bg py-4">
        <h1 className="text-md sm:text-2xl font-semibold text-center">
          Your Projects
        </h1>
        <hr className="mt-4border-gray-600 bg-black" />
        <div className="flex flex-col gap-6 mt-8">
          {projects.map((project) => (
            <Project key={project._id} title={project.title} id={project._id} />
          ))}
        </div>
        <div className="mt-4">
          <div
            onClick={() => setIsAddingProject(!isAddingProject)}
            className="flex items-center justify-center gap-2 md:gap-3 lg:gap-4 border border-dotted border-theme-primary py-2 rounded mx-2 cursor-pointer"
          >
            <h1 className="text-center">Add New Project</h1>
          </div>
        </div>
      </div>
      {isAddingProject ? (
        <>
          <AddProject HandleCancel={HandleCancel} HandleAdd={HandleAdd} />
          <div className="fixed inset-0 z-10 bg-gray-500 bg-opacity-75"></div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default SideBar;
