const mongoose = require("mongoose")

let connectionStr = process.env.MONGODB_URI || "mongodb://localhost/idleDB"

mongoose.connect(connectionStr)

module.exports = mongoose