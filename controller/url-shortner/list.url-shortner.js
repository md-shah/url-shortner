const sendResponse = require('../utils').sendResponse;
const shortURLModel = require('../../models/urlListModel').shortURLModel;

module.exports = async (req, res) => {
    try {
        const urlDataList = await shortURLModel.find();
        return sendResponse(res, 200, urlDataList);
    } catch (error) {
        return sendResponse(res, error.code || error.statusCode || 500, error.message || 'Internal Server Error');
    }
};
