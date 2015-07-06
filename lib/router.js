var Backbone = require('backbone'),
    PostModel = require('./postModel'),
    PostsCollectionView = require('./postsCollectionView'),
    PostDetailView = require('./postDetailView'),
    AppRouter;

/**
 *  returnHome @type {Function}
 *  Uses Router.navigate to return to the apps home/index route
 */
var returnHome = function (router) {
  var backLink = document.querySelector('.back');

  backLink.onclick = function (e) {
    if (e) e.preventDefault();
    return router.navigate('/', {
      trigger: true
    });
  };
};

module.exports = AppRouter = Backbone.Router.extend({
  routes: {
    '': 'showPostsCollection',
    ':postSlug': 'showPost',
    'credit': 'showCredit'
  },

  initialize: function () {
    returnHome(this);
    this.on('route', function () {
      this.toggleBackLink();
    }.bind(this));
  },

  switchView: function(view) {
    if (this.currentView){
      this.currentView.teardown();
    }
    this.currentView = view;

    setTimeout(function () {
      this.currentView.setup();
    }.bind(this), 250);
  },

  showPostsCollection: function () {
    var postsCollectionView = new PostsCollectionView();
    this.switchView(postsCollectionView);
  },

  showPost: function (postSlug) {
    var postModel = new PostModel({
          'postSlug': postSlug
        });

    postModel.fetch().done(function () {
      var detailView = new PostDetailView({
        model: postModel
      });
      this.switchView(detailView);
    }.bind(this));
  },

  showCredit: function () {
    console.log('credit page');
  },

  toggleBackLink: function () {
    var backLink = document.querySelector('.back');

    if (Backbone.history.getFragment() == '') {
      backLink.classList.remove('shown');
    } else {
      backLink.className += ' shown';
    }
  }
});

new AppRouter();
Backbone.history.start({
  pushState: true,
});
