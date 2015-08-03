var Backbone = require('backbone'),
    InstaModel = require('./instaModel'),
    InstaCollection;

module.exports = InstaCollection = Backbone.Collection.extend({
  model: InstaModel,
  url: 'api/insta'
});
