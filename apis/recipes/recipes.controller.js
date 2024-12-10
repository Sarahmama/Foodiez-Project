const Recipe = require("../../models/Recipes");

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().select("-createdAt -updatedAt");
    return res.json(recipes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getRecipeById = async (req, res) => {
  const { recipeId } = req.params;
  try {
    const recipe = await Recipe.findById(recipeId).select(
      "-createdAt -updatedAt"
    );
    if (recipe) {
      return res.json(recipe);
    } else {
      return res.status(404).json({ message: "recipe not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.createRecipe = async (req, res) => {
  try {
    const newRecipe = await Recipe.create(req.body);
    return res.status(201).json(newRecipe);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteRecipe = async (req, res) => {
  const { recipeId } = req.params;
  try {
    const foundRecipes = await Recipe.findById(recipeId);
    if (foundRecipes) {
      await foundRecipes.deleteOne();
      res.status(204).end();
    } else {
      res.status(404).json("this recipe doesn't exist");
    }
  } catch (error) {
    res.status(500).json({ errror: "Recipe not found" });
  }
};

exports.recipeUpdate = async (req, res) => {
  const { recipeId } = req.params;
  try {
    const foundRecipes = await Recipe.findById(recipeId);
    if (foundRecipes) {
      await foundRecipes.updateOne(req.body);
      res.status(204).json(foundRecipes);
    } else {
      res.status(404).json("this recipe doesn't exist");
    }
  } catch (error) {
    res.status(500).json({ errror: "recipe not found" });
  }
};
