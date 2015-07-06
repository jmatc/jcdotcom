var express = require('express'),
    router = express.Router(),
    info = require('../../package.json'),
    posts, credit;

posts = function (req, res) {
  res.render('index', info);
};

credit = function (req, res) {
  res.render('credit', info);
};

router
  .get('/:id', posts)
  .get('credit', credit)
  .get('/', posts);

module.exports = router;
