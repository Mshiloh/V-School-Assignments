const express = require("express");
const uuid = require("uuid");
const bodyParser = require("body-parser");

const app = express();
let bounties = require("./bounties.js");
const port = 8008;

app.use(bodyParser.json());

app.route("/bounties")
    .get((req, res) => {
        res.status(200).send(bounties);
    })

    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuid();
        bounties.push(newBounty);
        res.status(201).send(newBounty);
    });

app.route("/bounties/:id")
    .get((req, res) => {
        const { id } = req.params;
        const selectedBounty = todos.filter(bounty => bounty._id === id)[0];
        res.status(200).send(selectedBounty);
    })

    .delete((req, res) => {
        const { id } = req.params;
        bounties = bounties.filter(bounty => bounty._id !== id);
        res.status(204).send();
    })

    .put((req, res) => {
        const { id } = req.params;
        let editedBounty = req.body;
        bounties = bounties.map(bounty => bounty._id === id ? editedBounty = { ...bounty, ...editedBounty } : bounty);
        res.status(200).send(editedBounty);
    })

app.listen(port, () => console.log("Server running on port " + port + "...meow >^•ᴥ•^<"))