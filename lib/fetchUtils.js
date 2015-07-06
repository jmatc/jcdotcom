var $ = require('jquery');

var loadProgress = function (el) {
  var xhr = $.ajaxSettings.xhr();

  xhr.onprogress = function (e) {
    var percentComplete = 0;
    if (e.lengthComputable) {
      percentComplete = e.loaded / e.total;
    }
    $(el).css({
      width: Math.round(percentComplete * 100)+ '%'
    });
  };

  return xhr;
};

exports.loadProgress = loadProgress;
