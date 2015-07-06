var express = require('express'),
    router = express.Router(),
    info = require('../../package.json'),
    dbPosts = require('../db/posts'),
    posts, credit;

posts = function (req, res) {
  res.render('index', dbPosts);
};

credit = function (req, res) {
  res.render('credit', info);
};

router
  .get('/:id', posts)
  .get('credit', credit)
  .get('/', posts);

module.exports = router;
