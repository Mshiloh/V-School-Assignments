const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    description: String,
    upVotes: Number,
    downVotes: Number
})

const PostModel = mongoose.model("posts", postSchema);
module.exports = PostModel;