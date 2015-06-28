var mongojs = require('mongojs'),
    dbUrl = require('./url'),
    collection = ['posts'],
    dbPosts = mongojs(dbUrl, collection);

module.exports = dbPosts;
