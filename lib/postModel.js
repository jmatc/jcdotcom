var Backbone = require('backbone'),
    PostModel;

module.exports = PostModel = Backbone.Model.extend({

  initialize: function(options) {
    this.options = options || {};
  },

  url: function() {
    return '/api/posts/' + this.options.postSlug;
  },

  idAttribute: '_id'
});
