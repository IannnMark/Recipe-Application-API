const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },
    preparationSteps: {
        type: [String],
        required: true,
    },
    cookingTime: {
        type: String,
        required: true,
    },
    imageUrls: {
        type: String,
        required: true,
    }
}, { timestamps: true })


module.exports = mongoose.model("Recipe", recipeSchema);