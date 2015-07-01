var $ = require('jquery'),
    Backbone = require('backbone'),
    PostModel = require('./postModel'),
    PostsCollectionView = require('./postsCollectionView'),
    PostDetailView = require('./postDetailView'),
    AppRouter;

module.exports = AppRouter = Backbone.Router.extend({

  routes: {
    ':postSlug': 'showPost',
    '': 'showPostsCollection'
  },

  switchView: function(view) {
    if (this.currentView){
      this.currentView.close();
    }
    this.currentView = view;
    this.currentView.render();
  },

  showPostsCollection: function () {
    var postsCollectionView = new PostsCollectionView();
    this.switchView(postsCollectionView);
  },

  showPost: function (postSlug) {

    var self = this,
        postModel = new PostModel({
          'postSlug': postSlug
        });

    postModel.fetch().done(function () {
      var detailView = new PostDetailView({
        model: postModel
      });
      self.switchView(detailView);
    });
  }
});

var appRouter = new AppRouter();
Backbone.history.start({
  pushState: true
});
