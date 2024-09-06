const express = require("express");
const verifyToken = require("../utils/verifyUser");
const router = express.Router();
const { createRecipe, getRecipe, deleteRecipe, updateRecipe } = require("../controllers/recipeController");

router.post("/create", verifyToken, createRecipe);
router.get("/get/:id", getRecipe);
router.delete("/delete/:id", verifyToken, deleteRecipe);
// router.put("/update/:id", verifyToken, updateRecipe);


module.exports = router;