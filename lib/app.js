/**
 *  labelTip @type {Function}
 *  Shows social link/icon text as a tooltip
 */
var l, labelTip, doc = document, tipEl;

module.exports = labelTip = {
  labelTipLink: doc.querySelectorAll('#social-navigation a')
};

l = labelTip.labelTipLink.length;
tipEl = document.createElement('div');

while (l > 0) {
  labelTip.labelTipLink[l - 1].onmouseover = function(e) {
    tipEl.innerHTML = e.target.getAttribute('title');
    tipEl.className += ' shown ' + e.target.innerHTML.toLowerCase();
    this.appendChild(tipEl);
  };
  labelTip.labelTipLink[l - 1].onmouseout = function() {
    this.removeChild(tipEl);
  };
  l--;
}

// get the router
require('./router');
