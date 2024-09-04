const Recipe = require("../models/Recipe");
const errorHandler = require("../utils/error");

exports.createRecipe = async (req, res, next) => {
    try {
        const recipe = await Recipe.create(req.body);
        // console.log("Save Recipe", recipe);
        return res.status(201).json(recipe);
    } catch (error) {
        next(error);
    }
}