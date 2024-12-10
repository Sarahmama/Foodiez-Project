const { model, Schema } = require("mongoose");

const IngredSchema = new Schema({
    name: {
        type: String,
        default: null, 
      }
});

module.exports = model("Ingred", IngredSchema);
