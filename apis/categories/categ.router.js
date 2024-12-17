const express = require("express");
const router = express.Router();
const multer = require("multer");
const passport = require("passport");
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
router.post(
  "/",
  upload.single("image"),
  passport.authenticate("jwt", { session: false }),
  categoryCreate
);

router.delete(
  "/:categoryId",
  passport.authenticate("jwt", { session: false }),
  categoryDelete
);

router.put(
  "/:categoryId",
  upload.single("image"),
  passport.authenticate("jwt", { session: false }),
  categoryUpdate
);

module.exports = router;
