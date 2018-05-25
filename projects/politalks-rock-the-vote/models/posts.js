const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    description: String,
    thumbsUp: Number,
    thumbsDown: Number
})

const PostModel = mongoose.model("posts", postSchema);
module.exports = PostModel;