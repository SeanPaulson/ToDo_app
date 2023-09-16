const express = require('express');
const router = express.Router();
const task = require('../controllers/task-controller');

router.get('/', task.getTasks);
router.post('/', task.createTask);
router.delete('/:taskId', task.deleteTask);

module.exports = router;
