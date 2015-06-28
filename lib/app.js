(function() {
  var l, toolTip;

  toolTip = {
    tooltipLink: document.querySelectorAll('a'),
    container: document.querySelector('.tooltip'),

    showTip: function(target) {
      this.container.innerHTML = target.innerHTML;
      this.container.className += ' shown ' + target.innerHTML.toLowerCase();
    },

    hideTip: function(target) {
      this.container.innerHTML = '';
      this.container.className = 'tooltip';
    }
  };

  l = toolTip.tooltipLink.length;

  while (l > 0) {
    toolTip.tooltipLink[l - 1].onmouseover = function(e) {
      toolTip.showTip(e.target);
    };
    toolTip.tooltipLink[l - 1].onmouseout = function(e) {
      toolTip.hideTip(e.target);
    };
    l--;
  }
}).call(this);
