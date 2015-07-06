/**
 *  labelTip @type {Function}
 *  Shows social link/icon text as a tooltip
 */
var l, labelTip, doc = document;

module.exports = labelTip = {
  tooltipLink: doc.querySelectorAll('#social-navigation a'),
  container: doc.querySelector('.tooltip')
};

l = labelTip.tooltipLink.length;

while (l > 0) {
  labelTip.tooltipLink[l - 1].onmouseover = function(e) {
    labelTip.container.innerHTML = e.target.innerHTML;
    labelTip.container.className += ' shown ' + e.target.innerHTML.toLowerCase();
  };
  labelTip.tooltipLink[l - 1].onmouseout = function() {
    labelTip.container.innerHTML = '';
    labelTip.container.className = 'tooltip';
  };
  l--;
};

// get the router
require('./router');
