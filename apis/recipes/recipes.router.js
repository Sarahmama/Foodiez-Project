const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./media",
  filename: (req, file, cb) => {
    cb(null, `${+new Date()}${file.originalname}`);
  },
});
const upload = multer({
  storage,
});

const {
  getAllRecipes,
  getRecipeByName,
  createRecipe,
  recipeUpdate,
  deleteRecipe,
} = require("./recipes.controller");

router.get("/", getAllRecipes);

router.get("/:name", getRecipeByName);

router.post("/", upload.single("image"), createRecipe);

router.put("/:recipeId", upload.single("image"), recipeUpdate);

router.delete("/:recipeId", deleteRecipe);

module.exports = router;
