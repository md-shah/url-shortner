const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    userType: {type: String, default: 'user'}

});

module.exports.userModel = mongoose.model('User', userSchema);
