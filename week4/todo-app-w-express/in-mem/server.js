// Trying to code an in memory todo app


const express = require('express')
const fs = require('fs')
const cors = require('cors');

const app = express()
let todos = []

app.use(cors())
app.use(express.json())

// Create new todos
app.post('/', (req,res)=>{
    let highestId = 0;
    highestId = todos.reduce((maxId, todos) => Math.max(maxId, todos.id), 0);
    const newTask = {
        id: highestId + 1,
        message: req.body.message,
        priority: req.body.priority,
        group: req.body.group,
        status:'pending'
    }
    todos.push(newTask)
    res.status(201).json(newTask);
})

// Get all todos
app.get('/', (req,res) => {
    res.json(todos)
})

// Clear todos
app.get('/clear', (req,res) => {
    todos = []
    res.status(201).json(todos)
})

// Delete todos
app.delete('/:id', (req,res) =>{
    const id = Number(req.params.id)
    todos = todos.filter(todo => todo.id !== id)
    res.status(201).json(todos)
})

// Update todos
app.put('/:id', (req,res) =>{
    const id = Number(req.params.id)
    const todoidx = todos.findIndex(todo => todo.id === id)
    todos[todoidx].message = req.body.message
    todos[todoidx].priority = req.body.priority
    todos[todoidx].group = req.body.group
    res.status(201).json(todos[todoidx])
})

// Check off todos
app.patch('/:id', (req,res) =>{
    const id = Number(req.params.id);
    const todoidx = todos.findIndex(todo => todo.id === id)
    todos[todoidx].status = 'completed'
    res.status(201).json(todos)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})