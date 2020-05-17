const express = require('express');
const urlShorterRouter = express.Router();

const analyticsController = require('../controller/url-shortner/analytics.url-shortner');
const insertURLController = require('../controller/url-shortner/insert.url-shortner');
const listEveryURLController = require('../controller/url-shortner/list.url-shortner');
const redirectController = require('../controller/url-shortner/redirect.url-shortner');

// List analytics of a single URL
urlShorterRouter.get('/analytics/:urlID', analyticsController);
// Add URL to the Database
urlShorterRouter.post('/shortURL', insertURLController);
// List all existing URLs
urlShorterRouter.get('/shortURL', listEveryURLController);
// Redirect to original URL when a short URL is fetched
urlShorterRouter.get('/:shortURLid', redirectController);

module.exports = urlShorterRouter;
