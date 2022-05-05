const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true, unique: true},
    age: Number,
})

module.exports = mongoose.model("contact", ContactSchema)
