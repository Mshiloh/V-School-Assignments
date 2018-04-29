// ./express-server/controllers/todo.server.controller.js
import mongoose from "mongoose";

//import models
import Todo from "../models/todo.server.model";

export const getTodos = (req, res) => {
    Todo.find().exec((err, todos) => {
        if (err) {
            return res.json({ "success": false, "message": "Some Error" })
        }
        return res.json({ "success": true, "message": "Todos fetched sucessfully", todos });
    })
}

export const addTodo = (req, res) => {
    const newTodo = new Todo(req.body);
    newTodo.save({ _id: req.params.id }).exec((err, todo) => {
        if (err) {
            return res.json({ "success": false, "message": "Some Error" });
        }
        return res.json({ "success": true, "message": "Todo added successfully", todo })
    })
}

export const updateTodo = (req, res) => {
    Todo.findOneAndUpdate({ _id: rew.body.id }, req.body, { new: true }, (err, todo) => {
        if (err) {
            return res.json({ "success": false, "message": "SomeError", "error": err });
        }
        console.log(todo);
        return res.json({ "success": true, "message": "Updated successfully", todo })
    })
}

export const getTodo = (req, res) => {
    Todo.find({ _id: req.params.id }).exec((err, todo) => {
        if (err) {
            return res.json({ "success": false, "message": "SomeError" });
        }
        if (todo.length) {
            return res.json({ "success": true, "message": "Todo fetched by id sucessfully", todo });
        }
        else {
            return res.json({ "success": false, "message": "Todo with the given id not found" });
        }
    })
}

export const deleteTodo = (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err, todo) => {
        if (err) {
            return res.json({ "success": false, "message": "Some Error" });
        }
        return res.json({ "success": true, "message": todo.todoText + " deleted successfully" });
    })
}