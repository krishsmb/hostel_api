var express = require('express');
var router = express.Router();

var user = require('./user/userControler');


router.get('/', function (req, res, next) {
    res.render('hostel/index', {
        name: 'Hostel'
    });
});

router.post('/create_update_user', user.createUpdateUser);
router.post('/user_details', user.userDetails);

module.exports = router;