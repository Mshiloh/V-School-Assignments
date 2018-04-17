const express = require("express");
const uuid = require("uuid");
const bounties = require("../bountyData.js")

const bountyRouter = express.Router();
const port = 8080;

bountyRouter.route("/")
    .get((req, res) => {
        res.status(200).send(bounties);
    })

    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuid();
        bounties.push(newBounty);
        res.status(201).send(newBounty);
    });

    bountyRouter.route("/:id")
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

    module.exports = bountyRouter;