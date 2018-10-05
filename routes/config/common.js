var config = require('./config');
var database = require('./database')(config.database);
var moment = require('moment');

var common = {};

common.logError = function (function_name,params,log) {
    return new Promise((resolve,reject)=>{
        let data ={
            function_name : function_name,
            params : JSON.stringify(params),
            log : log,
            created : moment().utcOffset("+05:30").format('YYYY-MM-DD hh:mm:ss')
        };
        database.insert("h_err_log", data).then((result) => {
            resolve(result);
        }).catch(function(err) {
            resolve(err);
        });
    });
};

module.exports = common;