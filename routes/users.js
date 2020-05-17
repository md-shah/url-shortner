var express = require('express');
var userRouter = express.Router();

const loginController = require('../controller/user/login');
const signupController = require('../controller/user/signup');

userRouter.post('/signup', signupController);
userRouter.post('/login', loginController);

module.exports = userRouter;
