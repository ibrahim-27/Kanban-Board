const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: String,
    description: String,
    tags: [String],
    status: String,
    projectId: {
        type: mongoose.Types.ObjectId,
        ref: 'Project'
    }
    
});

exports.Task = mongoose.model('Task', taskSchema);