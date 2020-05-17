const sendResponse = require('../utils').sendResponse;
const shortURLModel = require('../../models/urlListModel').shortURLModel;
const analyticsModel = require('../../models/analyticsModel').analyticsModel;

module.exports = async (req, res) => {
    const requestParams = req.params;
    if (!requestParams.urlID) {
        return sendResponse(res, 422, 'Invalid Data Provided!');
    }
    try {
        const originalURLData = await shortURLModel.findById(requestParams.urlID);
        if (!originalURLData) {
            return sendResponse(res, 404, 'No URL Found!');
        }
        const urlDataList = await analyticsModel.find({urlID: requestParams.urlID});
        const timeBeforeOneHour = new Date().setHours(new Date().getHours() - 1);

        const visitsInLastHour = await analyticsModel.count({
            createdAt: {
                $gte: new Date(timeBeforeOneHour),
            }
        });
        if (!urlDataList) {
            return sendResponse(res, 404, 'No corresponding Data Found!');
        }

        let analyticsResponse = {
            totalVisitsCount: urlDataList.length,
            creationTime: originalURLData.createdAt,
            visitsInLastHour: visitsInLastHour,
            detailedData: urlDataList
        }
        return sendResponse(res, 200, analyticsResponse);
    } catch (error) {
        return sendResponse(res, error.code || error.statusCode || 500, error.message || 'Internal Server Error');
    }
};
