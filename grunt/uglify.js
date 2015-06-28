module.exports = function () {
  return {
    scripts: {
      src: [
        'lib/{,**/}*.js'
      ],
      dest: 'dist/js/app.js'
    }
  };
};
