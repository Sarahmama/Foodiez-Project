const express = require("express");
const {
  ingredCreate,
  ingredGet,
  ingredGetById,
  ingredUpdate,
  ingredDelete,
} = require("../ingredients/ingred.controller");
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
const router = express.Router();

router.post("/", upload.single("image"), ingredCreate);


router.get("/", ingredGet);

router.get("/:ingredId", ingredGetById);

router.put("/:ingredId", upload.single("image"), ingredUpdate);

router.delete("/:ingredId", ingredDelete);


module.exports = router;
