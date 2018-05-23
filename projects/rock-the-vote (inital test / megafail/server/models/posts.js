const mongoose = require("mongoose");
// const Schema = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    }, 
    votes: {
        type: Number,
    },
    comments: {
        type: String
    }
});

module.exports = mongoose.model("PostModel", postSchema);