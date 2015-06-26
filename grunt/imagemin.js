module.exports = function (grunt, options) {
  return {
    options: {
      pngquant: false,
      optimizationLevel: 7,
      progressive: true
    },
    'default': {
      files: [
        {
          expand: true,
          cwd: 'assets/images',
          src: ['{,**/}*.{png,jpg,gif}'],
          dest: 'dist/img'
        }
      ]
    }
  }
};
