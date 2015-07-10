var express = require('express'),
    router = express.Router(),
    request = require('request'),
    instaUrl = require('../db/instaUrl'),
    instaAll;

instaAll = function (req, res) {
  request({
    'url': instaUrl,
    'json': true
  }, function (error, response, body) {
    res.json(body);
  });
};

router.get('/', instaAll);

module.exports = router;
