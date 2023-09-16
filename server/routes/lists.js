const express = require('express');
const router = express.Router();
const list = require('../controllers/list-controller');

router.get('/', list.getLists);
router.post('/', list.createList);
router.get('/:listId', list.getListByID);
router.delete('/:listId', list.deleteList);
// router.update('/update/:listId', list.putListById)

module.exports = router;
