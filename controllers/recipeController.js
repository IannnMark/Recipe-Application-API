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

exports.getRecipe = async (req, res, next) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return next(errorHandler(404, "Recipe not found"));
        }
        res.status(200).json(recipe);
    } catch (error) {
        next(error);
    }
}

exports.deleteRecipe = async (req, res, next) => {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
        return next(errorHandler(404, "Recipe not found!"));
    }

    if (req.user.id !== recipe.userRef) {
        return next(errorHandler(401, "You can only delete your own recipe"));
    }

    try {
        await Recipe.findByIdAndDelete(req.params.id);
        res.status(200).json("Recipe has been deleted");
    } catch (error) {
        next(error);
    }
}

exports.updateRecipe = async (req, res, next) => {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
        return next(errorHandler(404, "Recipe not found"));

    }

    try {
        const updateRecipe = await Recipe.findByIdAndUpdate(
            req.params.id,  // The ID of the recipe to update
            req.body,       // The new data for the recipe
            { new: true }   // Return the updated recipe, not the old one
        );
        res.status(200).json(updateRecipe);    // Send the updated recipe back as the response
    } catch (error) {
        next(error);
    }
}