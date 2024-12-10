const express = require("express");
const router = express.Router();
const recipeController = require("../../apis/recipes/recipes.controller");

router.get("/", recipeController.getAllRecipes);

router.get("/:id", recipeController.getRecipeById);

router.post("/", recipeController.createRecipe);

module.exports = router;
