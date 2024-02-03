const express = require("express");
const projectRouter = express.Router();

const { CreateProject, GetProjects, DeleteProject } = require("../controller/Project");
const { auth } = require("../controller/Auth");


projectRouter.
post('/', CreateProject)
.get('/:id', auth, GetProjects)
.delete('/:id', DeleteProject);

exports.projectRouter = projectRouter;
