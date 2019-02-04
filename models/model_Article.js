// Import connected mongoose obj from config/connection
const mongoose = require("../config/connection")

// Define the structure of scheme via article obj
let article = {
    title: {
        type: String,
        trim: true,
        required: "All articles must have title"
    },
    link: {
        type: String,
        trim: true,
    },
    dateScraped: {
        type: Date,
        default: Date.now
    }
}

// Declare the Article variable to be a mongoose model of our new Schema
let Article = mongoose.model("Article", new mongoose.Schema(article))

// Export the model 
module.exports = Article