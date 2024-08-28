// INTERACTING WITH MONGODB AND CRUD OPERATIONS

const express = require('express');
const logReqRes = require("./middlewares");
const {connectMongoDb} = require("./connection");
const userRouter = require("./routes/user");

const app = express();
const PORT = 3000;

//Connection
connectMongoDb("mongodb://127.0.0.1:27017/project_01").then(() => 
console.log("MongoDb Connected!"));

//Middleware - Plugin
app.use(express.urlencoded({ extended: false})) 
app.use(logReqRes("log.txt"));

//Routes REST APIs
app.use("/api/users", userRouter);

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)})