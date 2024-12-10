const Recipe = require("../../models/Recipes");
const jwt = require("jsonwebtoken");

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// exports.createRecipe = async (req, res) => {
//   const recipe = new Recipe(req.body);
//   try {
//     const savedRecipe = await recipe.save();
//     res.status(201).json(savedRecipe);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

exports.createRecipe = async (req, res) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Bearer token
  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "your_jwt_secret"); // Verify token
    const recipe = new Recipe({
      ...req.body,
      userId: decoded.id, // Attach user ID to recipe if needed
    });
    const savedRecipe = await recipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
