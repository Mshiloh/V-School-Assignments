const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const logger = require("./middleware/logger.js");
const deckRouter = require("./routes/decks.js");
const cardRouter = require("./routes/cards.js");

const app = express();
const port = 8080;

//middleware
app.use(bodyParser.json())
app.use(logger);

//routes
app.use("/decks", deckRouter);
app.use("/cards", cardRouter);

mongoose.connect("mongodb://localhost:27017/flashcards", (err) => {
    if (err) console.error(err);
    console.log("Connected to MongoDB");
})
app.listen(port, () => console.log("Server running on port " + port))