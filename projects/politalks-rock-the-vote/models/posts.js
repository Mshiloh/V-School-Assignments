const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    votes: {
        type: Number, 
        default: 0
        }
})

const PostModel = mongoose.model("posts", postSchema);
module.exports = PostModel;