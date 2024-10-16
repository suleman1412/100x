const dotenv = require("dotenv");
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
dotenv.config();

const MONGO_URL = process.env.MONGO_URL; 

// Connect to MongoDB
mongoose.connect(MONGO_URL);

// Define schemas

const UserSchema = new mongoose.Schema({
    // Schema definition here
    userId: { type: String, default: uuidv4},
    email:{ type: String, required: true, unique: true},
    password:{ type: String, required: true}
});

const TodoSchema = new mongoose.Schema({
    // Schema definition here
    taskId:{type: String, default: uuidv4},
    taskName:{type: String, required: true},
    taskStatus:{type: Boolean, required: true},
    taskPriority:{type: String,
        enum:[
            'Queue',
            'Urgent and Important',
            'Urgent and Unimportant',
            'NonUrgent and Important',
            'NonUrgent and Unimportant'
        ],
        default:'Queue'        
    },
    userId:{type: String, ref:'User', required:true}
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    User: User,
    Todo: Todo
}