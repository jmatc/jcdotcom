var express = require('express'),
    router = express.Router(),
    dbPosts = require('../db/posts'),
    postsAll,
    postsOne;

postsAll = function (req, res) {
  dbPosts.posts.find(function (err, posts) {
    if (err) return;
    res.json(posts);
  });
};

postsOne = function (req, res) {
  var postSlug = req.params.postSlug;
  dbPosts.posts.findOne({ "postSlug": req.params.postSlug }, function (err, post) {
    if (err) return;
    res.json(post);
  });
};

router
  .get('/:postSlug', postsOne)
  .get('/', postsAll);

module.exports = router;
