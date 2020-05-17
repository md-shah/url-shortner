const {sendResponse} = require("../controller/utils");
const jwt = require('jsonwebtoken');

module.exports.apiAuthorization = (accessOnlyTo) => {
    return (req, res, next) => {
        try {
            if (!req.headers.authorization) {
                throw new Error('unauthorized');
            }
            const decodedToken = jwt.verify(req.headers.authorization.replace('Bearer ', ''), 'someSecret');
            console.log(decodedToken)
            if (!decodedToken) {
                throw new Error('unauthorized');
            }
            if ((decodedToken.exp < Number(new Date()) / 1000) || (accessOnlyTo.length > 0 && !accessOnlyTo.includes(decodedToken.userType))) {
                throw new Error('unauthorized');
            }
            next();
        } catch (err) {
            console.log(err);
            sendResponse(res, 401, 'unauthorized');
        }
    };
};
