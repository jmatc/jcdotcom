var express = require('express'),
    router = express.Router(),
    info = require('../../package.json'),
    error;

error = function (err, req, res) {
  res.render('error', info);
};

router.get('*', error);


module.exports = router;
