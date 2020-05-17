const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/url-shortener', {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(event => console.log("Database connection established"))
    .catch((err) => {
        console.log("Database Connection Failed!\n", err.message);
    });

module.exports = mongoose.connect;
