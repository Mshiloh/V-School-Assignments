const express = require("express");
const uuid = require("uuid");

const catRouter = express.Router();
const port = 8080;

const CatModel = require("../models/cat-model.js");

//routes
catRouter.route("/")
    .get((req, res) => {
        //use find)()
        CatModel.find((err, foundCats) => {
            if (err) return res.send(err);
            res.status(200).send(foundCats);
        })
    })

    //POST request:
    .post((req, res) => {
        //use save()
        const newCat = new CatModel(req.body);
        newCat.save((err, addedCat) => {
            if (err) return res.send(err);
            else
                res.status(201).send(addedCat);
        })
    })


//GET one request
catRouter.route("/:id")
    .get((req, res) => {
    })

    //POST request:
    .post((req, res) => {
    })

    //DELETE request
    .delete((req, res) => {
    })

    //PUT one request
    .put((req, res) => {
    })

module.exports = catRouter;

/*------------------------------------------------------------------------------------
//routes
catRouter.route("/")
    //GET request
    .get((req, res) => {
        //use find)() to get a cat from the database
        CatModel.find((err, foundCats) => {
            if (err) return res.send(err);
            res.status(200).send(foundCats);
        })
    })

//GET request (plain old kind)
// .get((req, res) => {
//     res.status(200).send(cats);
// })


//GET request
// .get((req, res) => {
//     const { query } = req;
//     const queriedCats = cats.filter(cat => {
//         for (let key in query) {
//             if (!cat.hasOwnProperty(key) || String(cat[key]).toLowerCase() !== query[key]) {
//                 return false;
//             }
//         }
//         return true;
//     })
//     res.status(200).send(queriedCats);
// })

//GET one request
//any requests to the cats/id endpoint we will send back the cat matching that id
catRouter.route("/:id")
    .get((req, res) => {
        //use findOne() to get a particular cat
        console.log(req.params.id); //params is object that contains all of the key parameters/parameter properties
        //get param id
        const { id } = req.params;
        const foundCat = cats.filter(cat => cat._id === id)[0];
        //send back to the cat
        res.status(201).send(foundCat);
    })

    //POST request:
    .post((req, res) => {
        //use save() to add a cat to the database
        //give data in request body an id
        const newCat = req.body;
        newCat._id = uuid();
        //save the data in the request body to the "database" (the empty array)
        cats.push(newCat);
        //send back the data that was added
        res.status(201).send(newCat);
    })

    //DELETE request
    .delete((req, res) => {
        //use findByIdAndDeleteOne() to update a particular cat
        const { id } = req.params;
        //find and remove cat matching id you want to delete
        cats = cats.filter(cat => cat._id !== id);
        //send back message confirming deletion of cat
        res.status(204).send();
    })

    //PUT one request
    .put((req, res) => {
        //use findByIdAndUpdate() to remove a cat

        // find param id
        const { id } = req.params;
        let editedCat = req.body;
        // map through cats and replace the cat with matching id with req.body
        cats = cats.map(cat => cat._id === id ? editedCat = { ...cat, ...editedCat } : cat);
        //send back edited cat
        res.status(200).send(editedCat);
    })
    */