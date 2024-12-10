const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./media",
  filename: (req, file, cb) => {
    cb(null, `${+new Date()}${file.originalname}`);
  },
});
const upload = multer({
  storage,
});
const {
  categoriesGet,
  categoryUpdate,
  categoryDelete,
  categoryCreate,
  getCategoryByName,
} = require("./categ.controller");

router.get("/", categoriesGet);
router.get("/:name", getCategoryByName);
router.post("/", upload.single("image"), categoryCreate);

router.delete("/:categoryId", categoryDelete);

router.put("/:categoryId", upload.single("image"), categoryUpdate);

module.exports = router;
