var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bill', { title: 'Danh sách hóa đơn' });
});

module.exports = router;