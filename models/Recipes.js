const { model, Schema } = require("mongoose");

const recipeSchema = new Schema({
  name: { type: String, required: true },
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingred" }],
  instructions: { type: String, required: true },
  image: { type: String, requierd: true },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Categories",
  },
});

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
