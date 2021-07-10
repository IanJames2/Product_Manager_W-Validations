const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Must have title or name of product the person has purchased"],
        minLength: [2, "Include at least 2 characters "]
    },
    price: {
        type: Number,
        required: [true, "What the price? Was it free?"],
    },
    description: {
        type: String,
        required: [true, "Describe"],
        minLength: [15, "Must include at least 15 characters in description"]
    }
})

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;
