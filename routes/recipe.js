const express = require("express");
const verifyToken = require("../utils/verifyUser");
const router = express.Router();
const { createRecipe } = require("../controllers/recipeController");

router.post("/create", verifyToken, createRecipe);


module.exports = router;