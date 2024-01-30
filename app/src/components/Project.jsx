import React from "react";
import { Icon } from "@iconify/react";
import { useAtom } from "jotai";
import { projectsAtom } from "../states/Project";

const Project = (props) => {
  const [projects, setProjects] = useAtom(projectsAtom);

  const DeleteProject = () => {
    setProjects(projects.filter((project) => project.id !== props.id));
  };

  return (
    <div className="flex items-center justify-around bg-theme-primary py-2 rounded mx-2">
      <div className="flex items-center justify-center gap-2">
        <Icon className="hidden sm:block" icon="octicon:project-roadmap-24" />
        <h1 className="text-center text-sm">{props.title}</h1>
      </div>
      <div>
        <Icon
          className="bg-tag-red text-red-900 border p-[2px] border-red-900 rounded-[50%] text-xl cursor-pointer"
          icon="material-symbols:delete-outline"
          onClick={DeleteProject}
        />
      </div>
    </div>
  );
};

export default Project;
