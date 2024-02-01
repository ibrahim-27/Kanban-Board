const express = require('express');
const taskRouter = express.Router();

const { CreateTask, GetTasks, DeleteTask, UpdateTask } = require('../controller/Task');


taskRouter.
post('/', CreateTask)
.get('/:pid', GetTasks)
.patch('/:id', UpdateTask)
.delete('/:id', DeleteTask);

exports.taskRouter = taskRouter;