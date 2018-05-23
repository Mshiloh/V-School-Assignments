const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const logger = require("./middleware/logger.js");

const postRouter = require("./routes/posts.js");
const commentRouter = require("./routes/comments.js");

const app = express();
const port = 3030;

// middleware
app.use(bodyParser.json());
app.use(logger);

// routes
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

// connecting to db
mongoose.connect("mongodb://localhost", (err) => {
    if (err) console.error(err);
    console.log("Connected to MongoDB >^•ᴥ•^<");
})
app.listen(port, () => console.log("Server running on port " + port));