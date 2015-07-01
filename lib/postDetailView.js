var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    PostDetailView;

module.exports = PostDetailView = Backbone.View.extend({

  tagName: 'div',
  id: 'article-detail',
  container: '#main',
  template: _.template($('#single').html()),
  backBtn: $('.back'),

  initialize: function () {
    _.bindAll(this, 'render');
    this.backBtn.addClass('shown');
    var self = this;
    this.backBtn.on('click', function (e) {
      e.preventDefault();
      self.returnHome();
    })
  },

  render: function () {
    var tpl = this.template,
        element = this.$el,
        container = this.container,
        articleDetail = this.$el.append(tpl(this.model.attributes));

    function appendArticle() {
      var dfd = $.Deferred();

      $(container).append(articleDetail);
      return dfd.promise();
    }

    function showView() {
      $(element).removeClass('hidden');
    }

    appendArticle();

    $.when(appendArticle()).then(showView());

    this.delegateEvents();

    return this;
  },

  returnHome: function () {
    Backbone.history.navigate('/', {
      trigger: true
    });
    this.backBtn.removeClass('shown');
  },

  close: function () {
    this.$el.remove();
    this.unbind();
  }
});
