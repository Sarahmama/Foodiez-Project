const { model, Schema } = require("mongoose");

const categoriesSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, requierd: true },
});

module.exports = model("Categories", categoriesSchema);
