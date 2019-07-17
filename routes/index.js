var express = require('express');
const db = require('../config/db');
var router = express.Router();
console.log(db);
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/conn1', function (req, res, next) {



});
module.exports = router;
