var config = require('../../config/config');
var database = require('../../config/database')(config.database);

var common = {};

common.logError = function () {
    return new Promise();
};