const express = require("express");
const { updateUser, deleteUser, getUserRecipe } = require("../controllers/userController");
const verifyToken = require("../utils/verifyUser");

const router = express.Router();

router.put("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/recipe/:id", verifyToken, getUserRecipe);



module.exports = router;