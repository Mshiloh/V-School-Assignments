const mongoose = require("mongoose");

const { Schema } = mongoose;

//Schema is a constructor
//detemines the template for all documents in a collection

const catSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    age: String,
    breed: String,
    adoptionStatus: {
        type: String,
        default: "available"
    }
})

const CatModel = mongoose.model("catsdatas", catSchema);
module.exports = CatModel;