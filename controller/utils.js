module.exports.sendResponse = (res, statusCode, data) => {
    if (typeof data === 'string') {
        data = {
            message: data
        };
    }
    res.status(statusCode).send(data);
};
