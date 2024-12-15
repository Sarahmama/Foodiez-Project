const { model, Schema } = require("mongoose");

const IngredSchema = new Schema({
  name: {
    type: String,
    default: null,
  },
<<<<<<< HEAD
=======
  image: {
    type: String,
    requierd: true,
  },
>>>>>>> 4434eda1f5b3bd30d41110d0d66136a05a7cdd8c
});

module.exports = model("Ingred", IngredSchema);
