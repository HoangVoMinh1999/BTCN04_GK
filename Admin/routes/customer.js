var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('customer', { title: 'Danh sách khách hàng' });
});

module.exports = router;