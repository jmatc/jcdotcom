module.exports = function (grunt, options) {
  return {
    scripts: {
      src: [
        'lib/vendor/jquery.js',
        'lib/{,**/}*.js'
      ],
      dest: 'dist/js/app.js'
    }
  };
};
