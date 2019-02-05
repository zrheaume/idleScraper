// Import connected mongoose obj from config/connection
const mongoose = require("../config/connection")

// Define the structure of schema via note obj
let note = {
    body: {
        type: String,
        trim: true,
        required: "All notes must have a body"
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
}

// Declare the Article variable to be a mongoose model of our new Schema
let Note = mongoose.model("Note", new mongoose.Schema(note))

// Export the model 
module.exports = Note