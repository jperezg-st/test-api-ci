// routes.js
'use strict';

const express = require('express');
const todoList= require('../controllers/controller.js');
const router = express.Router();



  
router.get('/tasks', todoList.listTasks)
router.post('/tasks', todoList.createTask);
router.get('/tasks/:taskId', todoList.readTask)
router.put('/tasks/:taskId', todoList.updateTask)
router.delete('/tasks/:taskId', todoList.deleteTask);


module.exports = router