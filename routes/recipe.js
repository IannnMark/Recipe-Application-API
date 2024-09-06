const express = require("express");
const verifyToken = require("../utils/verifyUser");
const router = express.Router();
const { createRecipe, getRecipe, deleteRecipe, updateRecipe, getRecipes } = require("../controllers/recipeController");

router.post("/create", verifyToken, createRecipe);
router.get("/get/:id", getRecipe);
router.delete("/delete/:id", verifyToken, deleteRecipe);
router.put("/update/:id", verifyToken, updateRecipe);
router.get("/get", getRecipes);


module.exports = router;