const mongoose = require('mongoose');

const shortURLSchema = new mongoose.Schema({
    url: String,
    shortURL: String,
}, {
    timestamps: true
});

module.exports.shortURLModel = mongoose.model('ShortURL', shortURLSchema);
