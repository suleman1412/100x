const express = require("express");
const dotenv = require("dotenv");
const TodoRouter = require("./routes/todo");
const UserRouter = require('./routes/user')
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/healthy", (req, res)=> res.send("I am Healthy"));

//  start writing your routes here
app.use('/todo', TodoRouter)

app.use('/user', UserRouter)

app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`));