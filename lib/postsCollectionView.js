var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    PostsCollection = require('./postsCollection'),
    PostView = require('./postView'),
    utils = require('./utils'),
    PostsCollectionView;

module.exports = PostsCollectionView = Backbone.View.extend({

  tagName: 'ul',
  id: 'article-feed',
  container: '#main',
  collection: new PostsCollection(),
  progressBar: '#progress-bar',

  render: function (postViews) {
    var container = this.container;

    $(container).append(postViews);
    this.$el.addClass('fade-in');

    return this;
  },

  setup: function () {
    var element = this.$el,
        progressBar = this.progressBar,
        appendPosts,
        collectionData,
        collectionModels;

    appendPosts = function (post) {
      var postView = new PostView({
        model: post
      }),
      postViews = $(element).append(postView.render().el);
      this.render(postViews);
    }.bind(this);

    collectionData = this.collection.fetch();
    collectionModels = this.collection.models;

    collectionData.done(function () {
      _.each(collectionModels, function (post) {
        appendPosts(post);
      }, this);
    });
  },

  teardown: function () {
    utils.teardown(this, this.$el);
  }
});
