var userControler = {};
var config = require('../../config/config');
var common = require('../../config/common');
var response = config.response;

var userModel = require('./userModel');


userControler.createUpdateUser = ((req, res, next) => {
    response.function = 'create_update_user';
    if(req.body.user_id || req.body.user_id !=''){
        userModel.usernameExist(req.body)
        .then(userModel.emailExist)
        .then(userModel.updateUser)
        .then((result) => {
            response.status = true;
            response.data = result;
            response.message = config.message.userUpdate;
            res.send(response);
        }).catch(function (err) {
            response.status = false;
            response.data = [];
            response.message = err;
            common.logError(response.function,req.body,err);
            res.send(response);
        });
    }else{
        userModel.usernameExist(req.body)
        .then(userModel.emailExist)
        .then(userModel.createUser)
        .then((result) => {
            response.status = true;
            response.data = result;
            response.message = config.message.userCreate;
            res.send(response);
        }).catch(function (err) {
            response.status = false;
            response.data = [];
            response.message = err;
            common.logError(response.function,req.body,err);
            res.send(response);
        });
    }
    
});

userControler.userDetails = ((req, res, next) => {
    response.function = 'user_details';
    userModel.userDetails(req.body).then((result) => {
        response.status = true;
        response.data = result;
        response.message = config.message.success;
        res.send(response);
    }).catch(function (err) {
        response.status = false;
        response.data = [];
        response.message = err;
        res.send(response);
    });
});

module.exports = userControler;