require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./database");
const authRoutes = require("./apis/auth/auth.router");

app.use(express.json());
app.use("/auth", authRoutes);

connectDb();

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
