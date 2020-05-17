const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sendResponse = require('../utils').sendResponse;
const userModel = require('../../models/user').userModel;

module.exports = (req, res) => {
    const userData = req.body;
    if (!(userData.username && userData.password)) {
        return sendResponse(res, 401, 'Invalid Data Provided');
    } else {
        userModel.findOne({username: userData.username}, async (err, userObject) => {
            if (err) {
                console.log(err);
                return sendResponse(res, 500, 'Internal Server Error');
            } else if (!userObject) {
                return sendResponse(res, 401, 'Invalid Username or Password');
            } else {
                if (bcrypt.compareSync(userData.password, userObject.password)) {
                    let token = generateJwt({userData: userObject});

                    sendResponse(res, 200, {
                        message: 'Login Success',
                        username: userObject.username,
                        accesstoken: token,
                    });
                } else {
                    return sendResponse(res, 401, 'Invalid Username or Password');
                }
            }
        }).populate('tenantId');
    }
};

function generateJwt(userData) {
    return jwt.sign(
        {...userData},
        'someSecret',
        {
            expiresIn: '1h'
        }
    );
}
