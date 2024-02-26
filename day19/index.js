const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8080

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: {
        type: String,
        required: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return /^[\w-\.]+@[\w-]+\.[\w-]{2,4}$/.test(v);
            },
            message: props => `${props.value} is not a valid email`
        }
    }
});

const User = mongoose.model("User", userSchema);
mongoose.connect("mongodb://127.0.0.1:27017/Node_JS_Challenge", { useNewUrlParser: true, useUnifiedTopology: true }); 

async function addUser(username, email) {
    try {
        const newUser = new User({ username, email });
        await newUser.validate();
        await newUser.save();
        console.log("User added successfully:", newUser);
    } catch (error) {
        console.error("\nError adding user:", error.message); 
    }
}

addUser("jhon_wick", "johnyjohn@example.com");
addUser("Kirmada", "DholakpurkaDushman@gmail.com");

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
