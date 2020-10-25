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

const getAllImages = async (req, res, next) => {
    try {
        const storedImages = await imageService.getStoredImages();

        if (storedImages.length === 0) {
            res.status(200).send({ message: 'No images found. Try adding one' });
            return;
        }
        res.status(200).send(JSON.stringify(storedImages));
    } catch (err) {
        logger.error(`getAllImages call failed because of error: ${err.message}`);
        next(err);
    }
};

module.exports = { getImage, getAllImages };

