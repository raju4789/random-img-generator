const connectToDB = require('../config/db.config');
const logger = require('../config/logger.config');

const errors = require('../errors/api.errors');
const errorModel = require('../errors/errorResponse');

/**
 * gets image by imageId
 * @param imageId
 * @returns imageInfo
 */
const getStoredImage = async (imageId) => {
    logger.info(`getStoredImage called for imageId : ${imageId}`);

    const db = await connectToDB();

    if (!db) {
        logger.error('DB connection failed');
        const error = new errorModel.errorResponse(
            errors.internal_error.withDetails('Our experts are looking into it.'));
        throw error;
    }

    const collection = db.collection('images');

    const imageInfo = await collection.findOne({ imageId });
    return imageInfo;
};

/**
 * Stores image
 * @param imageInfo object
 * @returns
 */
const storeImage = async (imageInfo) => {
    logger.info(`store image with imageId : ${imageInfo.imageId}`);

    const db = await connectToDB();

    if (!db) {
        logger.error('DB connection failed');
        const error = new errorModel.errorResponse(
            errors.internal_error.withDetails('Our experts are looking into it.'));
        throw error;
    }

    const collection = db.collection('images');

    await collection.insertOne(imageInfo);
};

/**
 * @returns all images stored in db
 */
const getAllDBImages = async () => {
    logger.info('getAllDBImages called');

    const db = await connectToDB();

    if (!db) {
        logger.error('DB connection failed');
        const error = new errorModel.errorResponse(
            errors.internal_error.withDetails('Our experts are looking into it.'));
        throw error;
    }

    const collection = db.collection('images');

    return await collection.find({}, { fields: { _id: 0 } }).toArray();
};

module.exports = { getStoredImage, storeImage, getAllDBImages };

