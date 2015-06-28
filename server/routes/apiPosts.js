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
  var postId = dbPosts.ObjectId(req.params.id);
  dbPosts.posts.findOne({ "_id": postId }, function (err, post) {
    if (err) return;
    res.json(post);
  });
};

router
  .get('/:id', postsOne)
  .get('/', postsAll);

module.exports = router;
