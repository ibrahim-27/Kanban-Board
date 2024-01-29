const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: String,
    description: String,
    tags: [String],
    status: String
});

exports.Task = mongoose.model('Task', taskSchema);