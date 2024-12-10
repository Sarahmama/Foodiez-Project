const express = require('express');
const {
    ingredCreate,
    ingredGet,
    ingredGetById,
    ingredUpdate,
    ingredDelete
} = require('../ingredients/ingred.controller');
const router = express.Router();



router.post('/', ingredCreate);

router.get('/', ingredGet);

router.get('/:ingredId', ingredGetById);

router.put('/:ingredId', ingredUpdate);

router.delete('/:ingredId', ingredDelete);

module.exports = router;