module.exports = function () {
  return {
    options: {
      mangle: false
    },
    scripts: {
      files: {
        'dist/js/vendor/jquery-min.js': ['node_modules/jquery/dist/jquery.min.js'],
        'dist/js/vendor/underscore-min.js': ['node_modules/underscore/underscore-min.js'],
        'dist/js/vendor/backbone-min.js': ['node_modules/backbone/backbone-min.js']
      }
    }
  };
};
