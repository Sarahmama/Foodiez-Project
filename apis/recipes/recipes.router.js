const express = require("express");
const router = express.Router();

const {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  recipeUpdate,
  deleteRecipe,
} = require("./recipes.controller");

router.get("/", getAllRecipes);

router.get("/:id", getRecipeById);

router.post("/", createRecipe);

router.put("/:id", recipeUpdate);

router.delete("/:id", deleteRecipe);

module.exports = router;
