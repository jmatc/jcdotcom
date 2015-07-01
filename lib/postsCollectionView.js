var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    PostsCollection = require('./postsCollection'),
    PostView = require('./postView'),
    PostsCollectionView;

module.exports = PostsCollectionView = Backbone.View.extend({

  tagName: 'ul',
  id: 'article-feed',
  container: '#main',

  initialize: function () {
    this.collection = new PostsCollection();
    // TODO
    if ($('.back').hasClass('shown')) {
      $('.back').removeClass('shown');
    }
  },

  render: function () {
    var self = this,
        collection = this.collection.fetch();

    collection.done(function () {
      _.each(self.collection.models, function (post) {
          self.renderPost(post);
      }, self);
    });

    return this;
  },

  renderPost: function (post) {
    var postView = new PostView({
      model: post
    }),

    container = this.container,
    postViews = this.$el.append(postView.render().el);

    $(container).append(postViews);
  },

  close: function () {
    this.$el.remove();
    this.unbind();
  }
});
