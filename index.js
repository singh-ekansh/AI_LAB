const express = require('express');
const { connectToMongoDb } = require('./connectmongoose');
const urlRoute = require('./routes/url');

const app = express(); // Create express app
const port = 3000; // Define the port

// Connect to MongoDB
connectToMongoDb("mongodb://localhost:27017/url-shortener");
console.log("Connected to MongoDB");

// Middleware for routes
app.use("/url", urlRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
}); // listen for requests
