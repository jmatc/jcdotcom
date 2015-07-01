var express = require('express'),
    router = express.Router(),
    info = require('../../package.json'),
    posts;

posts = function (req, res) {
  res.render('index', info);
};

router
  .get('/:id', posts)
  .get('/', posts);

module.exports = router;
