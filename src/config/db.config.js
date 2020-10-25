const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const errors = require('../errors/api.errors');
const errorModel = require('../errors/errorResponse');
const logger = require('./logger.config');

let db = null;

/**
 * connection logic to db
 *  @returns singleton db connection object
 */
const connectToDB = async () => {
    try {
        if (db) return db;
        const URL = await new MongoMemoryServer().getUri();
        const client = await MongoClient.connect(URL, { useNewUrlParser: true });
        db = client.db();
        return db;
    } catch (err) {
        logger.error(`Failed to connect to db with error ${err.message}`);
        const error = new errorModel.errorResponse(
            errors.internal_error.withDetails('Our experts are looking into it.'));
        throw error;
    }

};

module.exports = connectToDB;
