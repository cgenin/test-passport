var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Express' });
});

/* GET home page. */
router.get('/logged', function(req, res, next) {
    res.render('logged', { title: 'Express' });
});

module.exports = router;
