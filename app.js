const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/training");

let db = mongoose.connection;

db.once("open", () => {
    console.log("databse connected")
})

db.on('error', err => console.error(err));

const app = express();

const Student = require("./models/Students");

//find data get from db
app.get("/", (req, res) => {
    Student.find({ name: req.query.name }, (err, data) => {
        res.send(data);
    })
})

//insert
app.get("/save", (req, res) => {
    let st = new Student({
        name: "abhishek",
        age: 21,
        project: "sheirmiester"
    })

    st.save((err, data) => {
        res.send("data inserted");
    })
})

//update
app.get("/update", (req, res) => {
    Student.findOneAndUpdate({ name: "tanishq" }, { age: 100 }, (err, data) => {
        res.send(data);
    })
})

//delete
app.get("/remove", (req, res) => {
    Student.remove({ name: "abhishek" }, (err, data) => {
        res.send(data);
    })
})

app.listen(4000, () => {
    console.log("listening on port 4000")
})