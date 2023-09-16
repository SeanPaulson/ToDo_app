const Task = require('../models/task');
const List = require('../models/list');

// Gets all tasks
exports.getTasks = async (req, res, next) => {

  try {
    const tasks = await Task.find();
    res.send(tasks);

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Creates a task
exports.createTask = async (req, res, next) => {

  try {

    const task = new Task({
      content: req.body.content,
      listId: req.body.listId
    });

    const newTask = await task.save();


    res.status(201).send(newTask);

  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

// Deletes a task by ID
exports.deleteTask = async (req, res, next) => {

  try {
    const taskId = req.params.taskId;
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).send();
    }

    await Task.findByIdAndRemove(taskId);

    res.status(200).send();

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

