var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
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
