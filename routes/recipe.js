const express = require("express");
const verifyToken = require("../utils/verifyUser");
const router = express.Router();
const { createRecipe, getRecipe } = require("../controllers/recipeController");

router.post("/create", verifyToken, createRecipe);
router.get("/get/:id", getRecipe);


module.exports = router;