module.exports.sendResponse = (res, statusCode, data) => {
    if (statusCode >= 300 && statusCode < 400) {
        return res.status(statusCode).redirect(data);
    }
    if (typeof data === 'string') {
        data = {
            message: data
        };
    }
    return res.status(statusCode).send(data);
};

module.exports.generateRandomString = () => {
    let length = 5,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
