const express = require('express');
const router = express.Router();
const multer = require("multer");
const {
    ingredCreate,
    ingredGet,
    ingredGetByName,
    ingredUpdate,
    ingredDelete
} = require('../ingredients/ingred.controller');
const storage = multer.diskStorage({
    destination: "./media",
    filename: (req, file, cb) => {
      cb(null, `${+new Date()}${file.originalname}`);
    },
  });
  const upload = multer({
    storage,
  });


router.post('/', ingredCreate);

router.get('/', ingredGet);

router.get('/:ingredName', ingredGetByName);

router.put('/:ingredId', ingredUpdate);

router.delete('/:ingredId', ingredDelete);

module.exports = router;