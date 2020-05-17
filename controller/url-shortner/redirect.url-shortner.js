const sendResponse = require('../utils').sendResponse;
const shortURLModel = require('../../models/urlListModel').shortURLModel;
const analyticsModel = require('../../models/analyticsModel').analyticsModel;

module.exports = async (req, res) => {
    const requestParams = req.params;
    if (!requestParams.shortURLid) {
        return sendResponse(res, 422, 'Please provide a short URL');
    }
    try {
        const urlData = await shortURLModel.findOne({
            shortURL: requestParams.shortURLid
        });
        if (!urlData) {
            return sendResponse(res, 404,  'No corresponding URL Found!');
        }
        const analyticsData = new analyticsModel({
            urlID: urlData._id,
            details: req.useragent
        });
        await analyticsData.save();
        return sendResponse(res, 302, urlData.url);
    } catch (error) {
        return sendResponse(res, error.code || error.statusCode || 500, error.message || 'Internal Server Error');
    }
};
