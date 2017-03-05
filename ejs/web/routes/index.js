var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express2',name : 'Kim Jae Ki2' });
});

module.exports = router;
