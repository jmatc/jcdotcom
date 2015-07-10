var $ = require('jquery');

var teardown = function (view, element) {
  var el = element;

  if ($(el).hasClass('fade-in')) {
    $(el).removeClass('fade-in');
  }

  $(el).addClass('fade-out');
  $(el).on('webkitTransitionEnd oTransitionEnd msTransitionEnd transitionend', function() {
    view.unbind();
    $(el).remove();
  }.bind(this));
};

exports.teardown = teardown;
