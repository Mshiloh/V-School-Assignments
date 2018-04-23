const express = require("express");
const uuid = require("uuid");
const bodyParser = require("body-parser");

const bountyRouter = require("./routes/bounties.js");

const app = express();
const port = 8080;

//middleware
// convert request body from JSON
app.use(bodyParser.json());

//outsource the 'cat' rougtes to the cats.js file
//import them into this file, and when request is made to the cat/endpoint, route the request and repsonse objects to them

app.use("/bounties", bountyRouter);

app.listen(port, () => console.log("Server running on port " + port + "...meow >^•ᴥ•^<"))