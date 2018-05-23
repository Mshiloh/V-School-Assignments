const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const logger = require("./middleware/logger.js");

const postRouter = require("./routes/post.js");


const port = process.env.PORT || 3000;
const db = process.env.MONGO_URI || "mongodb://localhost/politalks";

app.use(bodyParser.json());
app.use(logger);
app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/api/posts/", postRouter);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

mongoose.connect(db, (err) => {
    if (err) console.error(err);
    console.log("Connected to MongoDB");
})

app.listen(
    app.listen(port, () => console.log("Server running on port " + port))
);