const { Router } = require("express");
const adminMiddleware = require("../middleware/user");
const TodoRouter = Router();
const { Todo }= require('../database/index')


// todo Routes
TodoRouter.post('/', async (req, res) => {
    // Implement todo creation logic
    const taskName = req.body.taskName;
    const taskStatus = req.body.taskStatus;
    const taskPriority = req.body.taskPriority;

    try{
        await Todo.create({
            taskName: taskName,
            taskStatus: taskStatus,
            taskPriority: taskPriority
        })
        res.send('Todo Created') //Only for backend testing
    }
    catch(e){
        console.error('Error during signup:', e); 
        res.status(500).json({
            message: e.message
        })
    }

});

TodoRouter.put('/', adminMiddleware, (req, res) => {
    // Implement update todo  logic
});

TodoRouter.delete('/', adminMiddleware, (req, res) => {
    // Implement delete todo logic
});

TodoRouter.delete('/:id', adminMiddleware, (req, res) => {
    // Implement delete todo by id logic
});


TodoRouter.get('/', adminMiddleware, (req, res) => {
    // Implement fetching all todo logic
});

TodoRouter.get('/:id', adminMiddleware, (req, res) => {
    // Implement fetching todo by id logic
});

module.exports = TodoRouter;