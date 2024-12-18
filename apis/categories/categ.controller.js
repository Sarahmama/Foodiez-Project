const Categories = require("../../models/Cetegories");

exports.categoryCreate = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = `http://localhost:8000/media/${req.file.filename}`;
    }
    const newCategory = await Categories.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.categoryDelete = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const foundCategory = await Categories.findById(categoryId);
    if (foundCategory) {
      await foundCategory.deleteOne();
      res.status(204).end();
    } else {
      res.status(404).json("this category doesn't exist");
    }
  } catch (error) {
    res.status(500).json({ errror: "category not found" });
  }
};

exports.categoryUpdate = async (req, res) => {
  const { categoryId } = req.params;
  try {
    if (req.file) {
      req.body.image = `http://localhost:8000/media/${req.file.filename}`;
    }
    const foundCategory = await Categories.findById(categoryId);
    if (foundCategory) {
      await foundCategory.updateOne(req.body);
      res.status(204).json(foundCategory);
    } else {
      res.status(404).json("this category doesn't exist");
    }
  } catch (error) {
    res.status(500).json({ errror: "category not found" });
  }
};
exports.categoriesGet = async (req, res) => {
  try {
    const categories = await Categories.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCategoryByName = async (req, res) => {
  const { name } = req.params;
  try {
    const foundCategory = await Categories.find({ name: name });
    if (foundCategory) {
      res.status(200).json(foundCategory);
    } else {
      res.status(404).json("this category doesn't exist");
    }
  } catch (error) {
    res.status(500).json({ errror: "category not found" });
  }
};
