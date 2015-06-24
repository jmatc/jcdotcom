module.exports = function (grunt, options) {

  var createFeatureFile = function () {
    if (!grunt.file.exists('lib/' + options.cfg.name + '.js')) {
      grunt.file.write('lib/' + options.cfg.name + '.js', 'module.exports = {};');
    } else {
      console.warn('Feature file already created.  Move along.');
    }
  };

  grunt.registerTask('createFeatureFile', createFeatureFile);
};