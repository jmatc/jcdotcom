var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    utils = require('./utils'),
    PostDetailView;

module.exports = PostDetailView = Backbone.View.extend({

  tagName: 'div',
  id: 'article-detail',
  container: '#main',
  template: _.template($('#single').html()),

  initialize: function () {
    $('.intro-text').on('click', function () {
      this.render();
    }.bind(this));
  },

  render: function (articleDetail) {
    var container = this.container;

    $(container).append(articleDetail);

    setTimeout(function () {
      this.$el.addClass('fade-in');
    }.bind(this), 10);

    this.delegateEvents();
    return this;
  },

  setup: function () {
    var tpl = this.template,
        articleDetail = this.$el.append(tpl(this.model.attributes));

    this.render(articleDetail);
  },

  teardown: function () {
    utils.teardown(this, this.$el);
  }
});
