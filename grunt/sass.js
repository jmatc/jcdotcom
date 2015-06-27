module.exports = function () {
  return {
    options: {
      noCache: true
    },
    all: {
      files: [
        {
          src: 'assets/stylesheets/app.scss',
          dest: 'dist/css/app.css'
        }
      ]
    }
  };
};
