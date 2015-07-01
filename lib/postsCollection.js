var Backbone = require('backbone'),
    PostModel = require('./postModel'),
    PostsCollection;

module.exports = PostsCollection = Backbone.Collection.extend({
  model: PostModel,
  url: 'api/posts'
});
