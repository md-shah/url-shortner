const bcrypt = require('bcrypt');
const sendResponse = require('../utils').sendResponse;
const userModel = require('../../models/user').userModel;

module.exports = (req, res) => {
    if (!(req.body.username && req.body.password)) {
        return sendResponse(res, 400, 'Invalid Data Provided');
    }
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    const newUser = new userModel(req.body);
    newUser.save().then(success => {
        return sendResponse(res, 200, 'User Added');
    }).catch(err => {
        console.log(err);
        return sendResponse(res, err.code || err.statusCode || 500, err.message || 'Internal Server Error');
    });
};


