var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    PostView;

module.exports = PostView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#feed').html()),
  events: {
    'click .entry-title a': 'showPostDetail'
  },

  initialize: function () {
    this.$el.unbind().empty();
  },

  render: function () {
    var tpl = this.template,
        element = this.$el;

    $(element).append(tpl(this.model.attributes));
    this.delegateEvents();
    return this;
  },

  showPostDetail: function (e) {
    e.preventDefault();
    var model = this.model,
        postSlug = model.attributes.postSlug;

    Backbone.history.navigate(postSlug, {
      trigger: true
    });
  }
});
