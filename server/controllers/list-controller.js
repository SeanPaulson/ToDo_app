const List = require('../models/list');

// Gets all lists
exports.getLists = async (req, res, next) => {

  try {
    const lists = await List.find().populate('tasks');
    res.send(lists);

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Creates a list
exports.createList = async (req, res, next) => {
  try {

    const list = new List({
      name: req.body.name
    });
    const newList = await list.save();

    res.status(201).send(newList);

  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

// Deletes a list by ID
exports.deleteList = async (req, res, next) => {

  try {
    const listId = req.params.listId;
    const list = await List.findById(listId);

    if (!list) {
      return res.status(404).send();
    }

    await List.findByIdAndRemove(listId);

    res.status(200).send();

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getListByID = async (req, res, next ) => {
  try{
    const listId = req.params.listId;
    console.log('populate')
    const list = await List.findById(listId).populate('tasks');

    if (!list) {
      return res.send();
    }

    res.status(201).send(list);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

exports.putListById = async (req, res, next) => {
  try {
    const listId = req.params.listId;
    const list = List.findByIdAndUpdate(listId, {
      tasks: req.body.tasks
    });

    if (!list) {
      return res.send();
    }
    res.status(201).send(list);
  } catch (error) {
    res.status(500).send({ message: error.message})
  }
}




