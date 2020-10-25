const express = require('express');

const imageController = require('../controllers/image.controller');

const router = express.Router();

/**
 * Route to handle user login
 *  @middleware authoriseRequest
 *  @returns user authorisation status
 */
router.route('/:id')
    .get(imageController.getImage);

module.exports = router;
