const logger = require('../config/logger.config');


const imageService = require('../services/image.service');

const getImage = async (req, res, next) => {
    try {
        const imageId = req.params.id;

        const requestedImageUrl = await imageService.generateImage(imageId);
        res.set('Content-Type', 'text/html');
        res.write(`<img src = ${requestedImageUrl}>`);
        res.status(200).send();
    } catch (err) {
        logger.error(`getImage call failed because of error: ${err.message}`);
        next(err);
    }
};

module.exports = { getImage };

