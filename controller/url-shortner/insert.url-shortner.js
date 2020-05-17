const sendResponse = require('../utils').sendResponse;
const shortURLModel = require('../../models/urlListModel').shortURLModel;
const generateRandomString = require('../utils').generateRandomString;


module.exports = async (req, res) => {
    const requestBody = req.body;
    try {
        if (!(requestBody.url)) {
            return sendResponse(res, 422, 'Invalid Data Provided');
        }
        const newURLData = new shortURLModel({
            url: requestBody.url,
            shortURL: generateRandomString()
        });
        await newURLData.save();
        return sendResponse(res, 200, 'URL Added');
    } catch (error) {
        console.log(error)
        return sendResponse(res, error.code || error.statusCode || 500, error.message || 'Internal Server Error');
    }
};
