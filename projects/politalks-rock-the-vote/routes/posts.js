const express = require("express");
const postRouter = express.Router();

const PostModel = require("../models/posts.js");
const CommentModel = require("../models/comments.js");

// routes
postRouter.route("/")
.get((req, res) => {
    PostModel.find(req.query)
        .populate("postId")
        .exec((err, foundPosts) => {
            if (err) return res.send(err);
            res.status(200).send(foundPosts)
        });
})
.post((req, res) => {
    const newPost = new PostModel(req.body);
    newPost.save((err, savedPost) => {
        if (err) return res.send(err);
        PostModel.populate(savedPost, { path: "postId" }, (err, popPost) => {
            if (err) return res.send(err);
            res.status(201).send(popPost);
        });
    });
});

// GET one
postRouter.route("/:id")
    .get((req, res) => {
        PostModel.findOne({ _id: req.params.id })
            .populate("postId")
            .exec((err, foundPost) => {
                if (err) return res.send(err);
                if (!foundPost) return res.status(404).send({ message: "Post not found." })
                res.status(200).send(foundPost);
            });
    })

    // PUT one
    .put((req, res) => {
        PostModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, updatedPost) => {
            if (err) return res.send(err);
            if (!updatedPost) return res.status(404).send({ message: "Post not found." });
            res.status(200).send(updatedPost);
        })
    })

     // DELETE one request
     .delete((req, res) => {
        PostModel.findOneAndRemove({ _id: req.params.id }, (err, deletedPost) => {
            if (err) return res.send(err);
            if (!deletedPost) return res.status(404).send({ message: "Post not found." })
            CommentModel.deleteMany({ postId: req.params.id },
                (err, foundComments) => {
                    console.log(foundComments);
                    if (err) return res.send(err);
                    res.status(204).send();
                }
            )
        })
    })

module.exports = postRouter;