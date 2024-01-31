import { atom } from "jotai";
import axios from "axios";

let projects = await axios.get("http://localhost:3000/project");
projects = projects.data;

export const projectsAtom = atom(projects);
