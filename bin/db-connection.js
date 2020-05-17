const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
let mongoURI = "mongodb://localhost:27017/url-shortener";

if (process.env.NODE_ENV === 'production') {
    mongoURI = "mongodb+srv://<username>:<password>@cluster0-ymzcl.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(mongoURI, {useNewUrlParser: true});
    client.connect().then(console.log("Production Database connection established"))
        .catch((err) => {
            console.log("Database Connection Failed!\n", err.message);
        });
} else {
    mongoose.connect(mongoURI, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    }).then(event => console.log("Database connection established"))
        .catch((err) => {
            console.log("Database Connection Failed!\n", err.message);
        });

}

module.exports = mongoose.connect;
