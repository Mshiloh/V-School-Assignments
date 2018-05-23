const express = require("express");
const postRouter = express.Router();
const PostModel = require("../models/posts");

//routes

postRouter.route("/")
    .get((req, res) => {
        PostModel.find(req.query)
            .exec((err, foundPosts) => {
                if (err) return res.send(err);
                res.status(200).send(foundPosts)
            });
    })
    .post((req, res) => {
        const newPost = new PostModel(req.body);
        newPost.save((err, savedPost) => {
            PostModel.save(savedPost, (err, popPost) => {
                if (err) return res.send(err);
                res.status(201).send(popPost);
            });
        });
    });

// GET one
postRouter.route(":/id")
    .get((Req, res) => {
        PostModel.findOne({ _id: req.params.id })
            .exec((Err, foundPost) => {
                if (err) return res.send(err);
                if (!foundPost) return res.status(404).send({ message: "Post not found." })
                res.status(200).send(foundPost);
            });
    })

// DELETE one
postRouter.route("/:id")
    .delete((req, res) => {
        PostModel.findOneAndRemove({ _id: req.params.id }, (err, deletedPost) => {
            if (!deletedPost) return res.send(404).send({ message: "Post not found." })
            res.send(204).send();
        })
    })

    // PUT one
    .put((req, res) => {
        PostModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: ture })
            .exec((err, editedPost) => {
                if (err) return res.send(err);
                if (!editedPost) return res.status(404).send({ message: "Post not found." });
                res.status(200).send(editedPost);
            })
    })

module.exports = postRouter;