const dotenv = require('dotenv')
const bcrypt = require('bcrypt')
const { Router } = require("express");
const UserRouter = Router();
const userMiddleware = require("../middleware/user");
const { User } = require('../database/index')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET;

// User Routes
UserRouter.post('/signup', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        const newUser = new User({
            email: email,
            password: await bcrypt.hash(password, 5)
        });
        const savedUser = await newUser.save();
        console.log('User created with userId:', {email: savedUser.email , id: savedUser.userId}); //for backend testing
        res.status(201).json({
            message: "User Created",
        });
    } catch (e) {
        console.error('Error during signup:', e);
        if (e.code === 11000) { // Duplicate key error
            res.status(409).json({ message: "Email already exists" });
        } else {
            res.status(500).json({ message: "Internal server error" });
        }
    }
});

UserRouter.post('/login', async (req, res) => {
     // Implement user login logic
    const email = req.body.email;
    const password = req.body.password;

    try{
        const response = await User.findOne({ email: email })
        if(!response){
            res.send(404).json({
                message: "No User found with that mail"
            })
            return;
        }

        const passwordMatch = await bcrypt.compare(password, response.password)
        if(passwordMatch){
            const token = jwt.sign({
                email: response.email
            }, JWT_SECRET)
            
            console.log("Credentials Match")
            return res.status(200).json({
                token: token
            })
        } else {
            return res.status(403).json({
                message: "Incorrect Password"
        });
        }
    }catch(e){
        console.log(e)
        res.status(500).json({
            message: "Internal Server Error"
        })
    }


});

UserRouter.get('/todos', userMiddleware, (req, res) => {
    // Implement logic for getting todos for a user
});

UserRouter.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic
});

module.exports = UserRouter