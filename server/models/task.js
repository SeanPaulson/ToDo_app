const mongoose = require('mongoose');

taskSchema = mongoose.Schema({
  content: {
    type: String,
    required: true
  }
});

const task = mongoose.model('Task', taskSchema);

module.exports = task;
