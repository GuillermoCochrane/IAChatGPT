var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ideas', id: "1" });
});

router.get('/:id', function(req, res, next) {
  res.render(req.params.id,{id: req.params.id});
});

module.exports = router;
