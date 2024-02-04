import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { projectsAtom, selectedProjectAtom } from "../states/Project";
import Project from "./Project";
import AddProject from "../ui/AddProject";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useAtom } from "jotai";
import { userIdAtom } from "../states/User";

const SideBar = () => {
  const [projects, setProjects] = useAtom(projectsAtom);
  const [selectedProject, setSelectedProject] = useAtom(selectedProjectAtom);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [userId] = useAtom(userIdAtom);
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchProjects = async () => {
      let res = await axios.get(`http://localhost:3000/project/${userId}`, {
        headers: {
            Authorization: `${localStorage.getItem("token")}`,
        }});

      setProjects(res.data);
      setSelectedProject(res.data[0]);
    }
    
    fetchProjects();
  }, [userId]);

  const HandleCancel = () => {
    setIsAddingProject(false);
  };

  const HandleAdd = async (project) => {
    setIsAddingProject(false);
    project = {...project, userId: userId};
    let newProject = await axios.post("http://localhost:3000/project", project);
    setProjects([...projects, newProject.data]);
  };

  const SelectProject = (id) => {
    setSelectedProject(projects.find(p => p._id === id ));
  }

  return (
    <>
      <div className="w-64 bg-theme-secondary text-theme-bg py-4 flex flex-col gap-2">
        <h1 className="text-md sm:text-2xl font-semibold text-center mb-2">
          Your Projects
        </h1>
        <hr className="mt-4border-gray-600 bg-black" />
        <div className="flex flex-col gap-6 mt-8 overflow-auto">
          {projects.length !== 0 && projects.map((project) => (
            <Project key={project._id} title={project.title} id={project._id} SelectProject={SelectProject} />
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
        <button onClick={()=>{
          localStorage.removeItem('token');
          localStorage.removeItem('userId');
          navigate('/');
        }} className="mt-auto w-1/2 mx-auto border border-red-600 left-[25%] px-2 py-1 rounded-md bg-red-600 hover:text-red-600 hover:bg-theme-secondary">Logout</button>
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
