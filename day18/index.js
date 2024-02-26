const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 8080;

// Define the schema for users
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

// Connect to MongoDB database
mongoose.connect("mongodb://localhost:27017/mydatabase", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB:', error.message);
    });

// Create a model based on the user schema
const User = mongoose.model("User", userSchema);

// Define a function to fetch all users from the database
function getAllUsers(req, res) {
    User.find({}, (error, users) => {
        if (error) {
            res.status(500).send({ error: 'An error occurred while fetching users' });
        } else {
            res.json(users);
        }
    });
}

// Set up a route to handle GET requests for retrieving all users
app.get("/users", getAllUsers);

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running and listening on port ${port}`);
});
