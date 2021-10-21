const mongoose = require("mongoose");

let schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    project: {
        type: String,
        required: false
    }
});

let Students = module.exports = mongoose.model("Student", schema);