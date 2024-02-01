import { atom } from "jotai";
import axios from "axios";

let projects = await axios.get("http://localhost:3000/project");
projects = projects.data;

let selectedProject = projects[0];
console.log(selectedProject);

export const projectsAtom = atom(projects);

export const selectedProjectAtom = atom(selectedProject);
