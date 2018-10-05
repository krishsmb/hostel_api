var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/developer', function (req, res, next) {
  res.render('developer', {
    title: 'Developer Details',
    url : '10.10.10.88:3000',
    node_version : process.version
  });
});
module.exports = router;