const { model, Schema } = require("mongoose");

const IngredSchema = new Schema({
  name: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    requierd: true,
  },
});

module.exports = model("Ingred", IngredSchema);
