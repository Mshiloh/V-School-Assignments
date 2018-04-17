const express = require("express");
const uuid = require("uuid");
const bodyParser = require("body-parser");

const app = express();
let todos = require("./todos.js");
const port = 8008;

app.use(bodyParser.json());

app.route("/todos")
.get((req, res) => {
    res.status(200).send(todos);
})

.post((req, res) => {
const newTodo = req.body;
newTodo._id = uuid();
todos.push(newTodo);
res.status(201).send(newTodo)
})

app.route("/todos/:id")
.get((req, res) => {
    const {id} = req.params;
    const selectedTodo = todos.filter(todo => todo._id === id)[0];
    res.status(200).send(selectedTodo);
})

.delete

app.listen(port, () => console.log("Server running on port " + port))