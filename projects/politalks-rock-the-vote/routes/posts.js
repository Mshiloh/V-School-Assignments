const express = require("express");
const postRouter = express.Router();

const PostModel = require("../models/posts.js");
const CommentModel = require("../models/comments.js");

// routes
postRouter.route("/")
    .get((req, res) => {
        PostModel.find(req.query, (err, foundPosts) => {
            if (err) return res.send(err);
            res.status(200).send(foundPosts);
        })
    })
    .post((req, res) => {
        const newPost = new PostModel(req.body);
        newPost.save((err, newPost) => {
            if (err) return res.send(err);
            res.status(201).send(newPost);
        })
    });

// GET one
postRouter.route("/:id")
    .get((req, res) => {
        PostModel.findOne({ _id: req.params.id }, (err, foundPost) => {
            if (err) return res.send(err);
            if (!foundPost) return res.status(404).send({ message: "Post not found." })
            res.status(200).send(foundPost);
        })
    })

    // PUT one    
    .delete((req, res) => {
        PostModel.findOneAndRemove({ _id: req.params.id }, (err, deletedPost) => {
            if (err) return res.send(err);
            if (!deletedPost) return res.status(404).send({ message: "Post not found." })
            res.status(200).send({ message: `'${deletedPost.title}' has been deleted.` });
        })
    })

    // DELETE many        
    // .delete((req, res) => {
    //     CommentModel.deleteMany({ postId: req.params.id }, (err, deleteStatus) => {
    //         if (err) return res.send(err);
    //         PostModel.findOneAndRemove({ _id: req.params.id }, (err, deletedPost) => {
    //             if (err) return res.send(err);
    //             if (!deletedPost) return res.status(404).send({ message: "Post not found." })
    //             res.status(200).send({ message: `"${deletedPost.title}" has been deleted.` })
    //         })
    //     })
    // })

    // PUT one
    .put((req, res) => {
        PostModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, editedPost) => {
            if (err) return res.send(err);
            if (!editedPost) return res.status(404).send({ message: "Post not found." });
            res.status(200).send(editedPost);
        })
    })

module.exports = postRouter;