const express = require("express");
const projectRouter = express.Router();

const { CreateProject, GetProjects, DeleteProject } = require("../controller/Project");

projectRouter.
post('/', CreateProject)
.get('/', GetProjects)
.delete('/:id', DeleteProject); 

exports.projectRouter = projectRouter;
