var express = require('express');
const {sendResponse} = require("../controller/utils");
const {apiAuthorization} = require("../middleware/auth");
var authenticatedRoute = express.Router();

// Restrict based on a some given user roles
authenticatedRoute.get('/classified', apiAuthorization(['superAdmin']),(req, res)=>{
  return sendResponse(res, 200, 'Access Granted');
});

// Basic auth checking like token validation and all
authenticatedRoute.get('/secret', apiAuthorization([]),(req, res)=>{
  return sendResponse(res, 200, 'Access Granted');
});

// Public URL. No auth implemented.
authenticatedRoute.get('/public',(req, res)=>{
  return sendResponse(res, 200, 'Access Granted');
});

module.exports = authenticatedRoute;
