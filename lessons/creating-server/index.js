const express = require("express");
const uuid = require("uuid");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const logger = require("./middleware/logger.js");
const catRouter = require("./routes/cats.js");

const app = express();
const port = 8080;

//middleware
// convert request body from JSON
app.use(bodyParser.json());
app.use(logger);

//outsource the 'cat' rougtes to the cats.js file
//import them into this file, and when request is made to the cat/endpoint, route the request and repsonse objects to them

app.use("/cats", catRouter);

mongoose.connect("mongodb://localhost:27017/cats", (err) => {
    if (err) console.error(err);
    console.log("Connected to MongoDB ...(ง'◡')ง")
})

app.listen(port, () => console.log("Server is running on port " + port));