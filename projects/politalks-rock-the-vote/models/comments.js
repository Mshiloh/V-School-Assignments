const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema({
    content: {
        required: true,
        type: String
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "posts"
    }
})

const CommentModel = mongoose.model("comments", commentSchema);
module.exports = CommentModel;