const express = require('express');
const router = express.Router(); // create a router
const itemsController = require('../controllers/items');

// Routes linked to controllers
router.get('/items', itemsController.getTodos);        
router.get('/item/:id', itemsController.getTodo);      

// Endpoint to create a new item
router.post('/item', itemsController.createTodo);

// Endpoint to update an item by its ID
router.patch('/item/:id', itemsController.editTodo);

// Endpoint to delete an item by its ID
router.delete('/item/:id', itemsController.deleteTodo);

module.exports = router;

