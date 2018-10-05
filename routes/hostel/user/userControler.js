var user = {};
var config = require('../../config/config');
var response = config.response;


user.createUser = ((req, res, next) => {
    response.function = 'create_user';
    
    res.send(response);
});

module.exports = user;