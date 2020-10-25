const axios = require('axios');

const logger = require('../config/logger.config');

const imageRepo = require('../repos/image.repo');

const errors = require('../errors/api.errors');
const errorModel = require('../errors/errorResponse');

/**
 * generates a random image by calling external api
 * and stores resulted image in db
 * @param {String} imageId 
 */
const generateImage = async (imageId) => {

    logger.info(`generateImage called with imageId : ${imageId}`);

    try {
        const dbImageInfo = await imageRepo.getStoredImage(imageId);

        if (dbImageInfo) {
            logger.info(`image already exists with given imageId : ${imageId}`);
            return dbImageInfo.imageUrl;
        }

        const RANDOM_IMAGE_GENERATION_URL = 'https://picsum.photos/200';
        const res = await axios.get(RANDOM_IMAGE_GENERATION_URL);
        const generatedUrl = res && res.request && res.request.res && res.request.res.responseUrl;
        if (!generatedUrl) {
            logger.error('Failed to generate random image');
            throw new Error();
        }

        await imageRepo.storeImage({ imageId, imageUrl: generatedUrl });

        return generatedUrl;
    } catch (err) {
        logger.error(`Failed to generate random image because of error : ${err.message}`);
        const error = new errorModel.errorResponse(
            errors.internal_error.withDetails('Failed to generate random image'));
        throw error;
    }

};


module.exports = { generateImage };

