const express = require('express');

const ToDoListController = require('../controllers/ToDoListController');

const router = express.Router();

router.post('/', ToDoListController.create);
router.get('/', ToDoListController.getAll);
router.patch('/', ToDoListController.updateById);
router.delete('/', ToDoListController.deleteById);

module.exports = router;
