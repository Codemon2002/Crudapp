require('dotenv').config();

const bcrypt = require('bcrypt');
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const taskRouter = require("./routes/taskRoutes.js");
const userRouter = require("./routes/userRoutes.js"); // Import user routes

// const { MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD } = require("./config/config");
// const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

// console.log("MONGO_URL: " + MONGO_URL);

// MongoDB connection
mongoose.connect(
  "mongodb://localhost:27017/crud-app"
)
  .then(() => {
    console.log("Successfully Connected to MongoDB");
  })
  .catch((e) => {
    console.log("Error:", e);
  });

// Middleware to handle JSON
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Hello World using Docker and...!!!</h1>");
});

app.use("/api/v1/tasks", taskRouter);
app.use("/api/v1/users", userRouter); // Add user routes here

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Listening on PORT:", PORT);
});