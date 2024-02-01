const mongoose = require("mongoose");
const { Project } = require("../model/Project");

exports.CreateProject = async (req, res) => {
  try {
    let userId = req.body.userId;

    const project = new Project({...req.body, userId: new mongoose.Types.ObjectId(userId)});
    await project.save();
    res.send(project);
  } catch (error) {
    console.log("Error creating project", error);
    res.sendStatus(500);
  }
};

exports.GetProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    console.log("Error getting projects", error);
    res.sendStatus(500);
  }
};

exports.DeleteProject = async (req, res) => {
   try {
    const project = await Project.findOneAndDelete({
      _id: new mongoose.Types.ObjectId(req.params.id)
    });
    res.json(project);
   } catch (error) {
    console.log("Error deleting project", error);
    res.sendStatus(500);
   }
}
