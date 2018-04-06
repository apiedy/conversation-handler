var express = require('express'),
    serviceHandler = express.Router();

serviceHandler.use(function(req, res, next) {
    console.log(req.body);
    next();
})

module.exports = serviceHandler;