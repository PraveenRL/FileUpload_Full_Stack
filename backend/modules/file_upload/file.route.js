const express = require('express');
var fileRoute = express.Router();
var fileControl = require('./file.control');

fileRoute.route('/upload').post(fileControl.upload);

module.exports = fileRoute;