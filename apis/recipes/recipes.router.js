const express = require("express");
const router = express.Router();
const multer = require("multer");
const passport = require("passport");
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
  getRecipeByCategory,
  createRecipe,
  recipeUpdate,
  deleteRecipe,
} = require("./recipes.controller");

router.get("/", getAllRecipes);

router.get("/:categoryId", getRecipeByCategory);

router.post(
  "/",
  upload.single("image"),
  passport.authenticate("jwt", { session: false }),
  createRecipe
);

router.put(
  "/:recipeId",
  upload.single("image"),
  passport.authenticate("jwt", { session: false }),
  recipeUpdate
);

router.delete(
  "/:recipeId",
  passport.authenticate("jwt", { session: false }),
  deleteRecipe
);

module.exports = router;
