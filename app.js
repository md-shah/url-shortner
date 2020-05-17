const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const useragent = require('express-useragent');

const dbConnection = require('./bin/db-connection');
dbConnection;
const urlShorterRoute = require('./routes/urlShortner');

const app = express();
app.use(useragent.express());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', urlShorterRoute);

module.exports = app;
