const express = require("express");

const commentRouter = express.Router();

const CommentModel = require("../models/comments");
const PostModel = require("../models/posts");

// routes
commentRouter.route("/")
    .get((req, res) => {
        CommentModel.find(req.query)
            .exec((err, foundComments) => {
                if (err) return res.send(err);
                res.status(200).send(foundComments)
            });
    })
    .post((req, res) => {
        const newComment = new CommentModel(req.body);
        newComment.save((err, savedComment) => {
            if (err) return res.send(err);
            res.status(201).send(savedComment);
        });
    });

// GET one
commentRouter.route("/:id")
    .get((req, res) => {
        CommentModel.findOne({ _id: req.params.id })
            .exec((err, foundComment) => {
                if (err) return res.send(err);
                if (!foundComment) return res.status(404).send({ message: "Comment not found." })
                res.status(200).send(foundComment);
            });
    })

    // PUT one
    .put((req, res) => {
        CommentModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .exec((err, updatedComment) => {
                if (err) return res.send(err);
                if (!updatedComment) return res.status(404).send({ message: "Comment not found." });
                res.status(200).send(updatedComment);
            })
    })

    // DELETE one    
    .delete((req, res) => {
        CommentModel.findOneAndRemove({ _id: req.params.id }, (err, deletedComment) => {
            if (err) return res.send(err);
            if (!deletedComment) return res.status(404).send({ message: "Comment not found." })
            res.status(204).send();
        })
    })

module.exports = commentRouter;