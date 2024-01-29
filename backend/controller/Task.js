const mongoose = require('mongoose');
const {Task} = require('../model/Task');

exports.CreateTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.send(task);
    } catch (error) {
        console.log('Error creating task');
        res.sendStatus(500);
    }
}

exports.GetTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.json(tasks);
    } catch (error) {
        console.log('Error getting tasks');
        res.sendStatus(500);
    }
}

exports.DeleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({_id: new mongoose.Types.ObjectId(req.params.id)});
        res.json(task);
    } catch (error) {
        console.log('Error deleting tasks');
        res.sendStatus(500);
    }
}

exports.UpdateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findOneAndUpdate(
            { _id: new mongoose.Types.ObjectId(req.params.id) }, // Filter condition
            { $set: { status: req.body.status } }, // Update status field
            { new: true } // Return updated document
        );
        res.json(updatedTask);
    } catch (error) {
        console.log('Error updating task');
        res.sendStatus(500);
    }
}