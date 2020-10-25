const express = require('express');

const imageController = require('../controllers/image.controller');

const router = express.Router();

/**
 * Route to generate randon image
 *  
 * */
router.route('/:id')
    .get(imageController.getImage);

/**
 * Route to generate randon image
 *  
 * */
router.route('/')
    .get(imageController.getAllImages);

module.exports = router;
