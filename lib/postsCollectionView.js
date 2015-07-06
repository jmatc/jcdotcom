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
  collection: new PostsCollection(),
  progressBar: '#progress-bar',

  render: function (postViews) {
    var container = this.container;

    $(container).append(postViews);

    setTimeout(function () {
      this.$el.addClass('fade-in');
    }.bind(this), 10);

    return this;
  },

  setup: function () {
    var element = this.$el,
        progressBar = this.progressBar,

    appendPosts = function (post) {
      var postView = new PostView({
        model: post
      }),
      postViews = $(element).append(postView.render().el);
      this.render(postViews);
    }.bind(this),

    handleProgress = function (e) {
      var percentComplete = 0;
      if (e.lengthComputable) {
        percentComplete = e.loaded / e.total;
      }
      $(progressBar).css({
        width: Math.round(percentComplete * 100)+ '%'
      });
    },

    collectionData = this.collection.fetch({
      xhr: function() {
        var xhr = $.ajaxSettings.xhr();
        xhr.onprogress = handleProgress;
        return xhr;
      }
    }),

    collectionModels = this.collection.models;

    collectionData.done(function () {
      _.each(collectionModels, function (post) {
        appendPosts(post);
      }, this);

      setTimeout(function() {
        $(progressBar).addClass('hidden');
      }, 500);
    });
  },

  teardown: function () {
    var element = this.$el;

    if ($(element).hasClass('fade-in')) {
      $(element).removeClass('fade-in');
    }

    $(element).addClass('fade-out');
    $(element).on('webkitTransitionEnd oTransitionEnd msTransitionEnd transitionend', function() {
      $(element).remove();
      this.unbind();
    }.bind(this));
  }
});
