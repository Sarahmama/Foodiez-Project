require("dotenv").config();
const express = require("express");
const passport = require("passport");
const cors = require("cors");

const app = express();
app.use(cors());

const connectDb = require("./database");
const { localStrategy, jwtStrategy } = require("./passport");
const authRoutes = require("./apis/auth/auth.router");
const recipeRoutes = require("./apis/recipes/recipes.router");
const ingredients = require("./apis/ingredients/ingred.router");

const categRoutes = require("./apis/categories/categ.router");
const path = require("path");
app.use(express.json());
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

app.use("/auth", authRoutes);
app.use("/categories", categRoutes);
app.use("/recipes", recipeRoutes);
app.use("/ingredient", ingredients);
app.use("/media", express.static(path.join(__dirname, "media")));

connectDb();

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
