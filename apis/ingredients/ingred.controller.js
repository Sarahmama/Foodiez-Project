const Ingred = require("../../models/Ingredients");

exports.ingredCreate = async (req, res) => {
  try {
    if (req.file) {

        req.body.image = `http://localhost:8000/media/${req.file.filename}`;
      }

    const newIngred = await Ingred.create(req.body);
    res.status(201).json(newIngred);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

exports.ingredGet = async (req, res) => {
  try {
    const ingredients = await Ingred.find();
    res.status(200).json(ingredients);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

exports.ingredGetByName = async (req, res) => {
  const { ingredName } = req.params;

  try {
    const foundIngredient = await Ingred.find({ name: ingredName });

    if (!foundIngredient) {
      return res.status(404).json({ message: "Ingredient not found" });
    }

    res.status(200).json(foundIngredient);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

exports.ingredUpdate = async (req, res) => {
  const { ingredId } = req.params;

  try {
    if (req.file) {

        req.body.image = `http://localhost:8000/media/${req.file.filename}`;
      }
    const updatedIngredient = await Ingred.findByIdAndUpdate(
      ingredId,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedIngredient) {
      return res.status(404).json({ message: "Ingredient not found" });
    }

    res.status(200).json(updatedIngredient);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

exports.ingredDelete = async (req, res) => {
  const { ingredId } = req.params;

  try {
    const deletedIngredient = await Ingred.findByIdAndDelete(ingredId);

    if (!deletedIngredient) {
      return res.status(404).json({ message: "Ingredient not found" });
    }

    res.status(200).json({ message: "Ingredient deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};