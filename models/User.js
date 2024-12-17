const { model, Schema } = require("mongoose");
const UserShema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: { type: String },
  myRecipes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipes",
    },
  ],
});
module.exports = model("User", UserShema);
