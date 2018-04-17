const express = require("express");
const uuid = require("uuid");
const bodyParser = require("body-parser");

const app = express();
let things = require("./things.js");
const port = 8008;

app.use(bodyParser.json());

app.route("/things")
.get((req, res) => {
    const {query} = req;
    const queriedThings = things.filter(thing => {
        for (let key in query) {
            if (!thing.hasOwnProperty(key) || String(thing[key].toLowerCase) !== query[key]) {
                return false;
            }
        }
        return true;
    })
    res.status(200).send(queriedThings);
})

//POST request:
.post((req, res) => {
    const newThing = req.body;
    newThing._id = uuid();
    things.push(newThing);
    res.status(200).send(newThing);
})

//GET one request
app.route("/things/:id")
.get((req, res) => {
    console.log(req.params.id); 
    const { id } = req.params;
    const selectedThing = things.filter(thing => thing._id === id)[0];
    res.status(201).send(selectedThing);
})

//DELETE request
.delete((req, res) => {
    const { id } = req.params;
    things = things.filter(thing => thing._id !== id);
    res.status(204).send();
})

//PUT request
.put((req, res) => {
    const { id } = req.params;
    let editedThing = req.body;
    things = things.map(thing => thing._id === id ? editedThing = { ...thing, ...editedThing } : thing);
    res.status(200).send(editedThing);
})

app.listen(port, () => console.log("Server is running on port " + port + " (~˘▾˘)~"));