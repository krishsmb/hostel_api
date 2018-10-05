var userControler = {};
var config = require('../../config/config');
var response = config.response;

var userModel = require('./userModel');


userControler.createUser = ((req, res, next) => {
    response.function = 'create_user';
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
            res.send(response);
        });
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