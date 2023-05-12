require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("../config/dbConnect");
const { errorHandler, errorGenerator } = require("../error/errorHandler");

//routes 
const authRouter = require("../routes/authRoute");
const home = require("../routes/home");



//connect to database 
connectDB();
//app level middleware 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logic goes here
app.use("/", home);
app.use("/api/user", authRouter);


//error handling 
app.use(errorGenerator);
app.use(errorHandler);

module.exports = app;
