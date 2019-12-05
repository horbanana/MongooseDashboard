  
// Use console.log so you can know where something goes wrong (if it does).
console.log("dog.js is running")

const mongoose = require("mongoose");

const DogSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: [2, "Name name must be 1 characters or more!"]
    },

    breed:{
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    favoriteFood:{
        type: String,
        required: true
    },
    owner:{
        type: String,
        required: true
    },

    facts: []

}, {timestamps: true}); // automatically create time

mongoose.model("Dog", DogSchema); //register model 