var express = require('express');
var router = express.Router();

var user  =require('./user/userControler');


router.get('/', function (req, res, next) {
    res.render('hostel/index', {
        name: 'Hostel'
    });
});

router.get('/create_user',user.createUser);

module.exports = router;