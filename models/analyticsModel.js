const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const analyticsSchema = new mongoose.Schema({
    urlID: [{
        type: Schema.Types.ObjectId,
        ref: 'ShortURL'
    }],
    requestIP: String,
    details: Object,
}, {
    timestamps: true
});

module.exports.analyticsModel = mongoose.model('Analytics', analyticsSchema);
