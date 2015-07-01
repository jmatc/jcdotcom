module.exports = function () {
  return {
    options: {
      alias: {
        'jquery': './dist/js/vendor/jquery-min.js',
        'underscore': './dist/js/vendor/underscore-min.js',
        'backbone': './dist/js/vendor/backbone-min.js'
      }
    },
    scripts: {
      files: {
        'dist/js/app.js': ['lib/app.js'],
      }
    }
  };
};
