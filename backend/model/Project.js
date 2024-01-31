const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

exports.Project = mongoose.model('Project', projectSchema);