module.exports = function () {
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
