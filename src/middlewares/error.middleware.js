/**
 * error handlind middleware
 * @param err
 * @param response
 * @returns error response
 */
const errorHandler = (err, req, res, next) => {

    const STATUS_CODE = err.HTTP_STATUS || 500;

    res.status(STATUS_CODE).send(err);
};

module.exports = errorHandler;

