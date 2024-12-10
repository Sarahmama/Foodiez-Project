require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./database");
const authRoutes = require("./apis/auth/auth.router");



const recipeRoutes = require("./apis/recipes/recipes.router");
const ingredients = require("./apis/ingredients/ingred.router");

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/recipes", recipeRoutes);
app.use("/ingredient", ingredients);


connectDb();

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
