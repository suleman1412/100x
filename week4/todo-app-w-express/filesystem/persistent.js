const express = require('express')
const fs = require('fs')
const cors = require('cors');

const app = express()
const todosFile = 'todos.json'

function loadTodos() {
    try {
        const data = fs.readFileSync(todosFile, 'utf8')
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

function saveTodos(todos) {
    fs.writeFileSync(todosFile, JSON.stringify(todos, null, 2))
}

let todos = loadTodos()

app.use(cors())
app.use(express.json())

// Create new todos
app.post('/', (req,res)=>{
    let highestId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), 0);
    const newTask = {
        id: highestId + 1,
        message: req.body.message,
        priority: req.body.priority,
        group: req.body.group,
        status:'pending'
    }
    todos.push(newTask)
    saveTodos(todos)
    res.status(201).json(newTask);
})

// Get all todos
app.get('/', (req,res) => {
    res.json(todos)
})

// Clear todos
app.get('/clear', (req,res) => {
    todos = []
    saveTodos(todos)
    res.status(201).json(todos)
})

// Delete todos
app.delete('/:id', (req,res) =>{
    const id = Number(req.params.id)
    todos = todos.filter(todo => todo.id !== id)
    saveTodos(todos)
    res.status(201).json(todos)
})

// Update todos
app.put('/:id', (req,res) =>{
    const id = Number(req.params.id)
    const todoidx = todos.findIndex(todo => todo.id === id)
    todos[todoidx].message = req.body.message
    todos[todoidx].priority = req.body.priority
    todos[todoidx].group = req.body.group
    saveTodos(todos)
    res.status(201).json(todos[todoidx])
})

// Check off todos
app.patch('/:id', (req,res) =>{
    const id = Number(req.params.id);
    const todoidx = todos.findIndex(todo => todo.id === id)
    todos[todoidx].status = 'completed'
    saveTodos(todos)
    res.status(201).json(todos)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})