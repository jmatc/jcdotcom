module.exports = function () {
  return {
    options: {
      noCache: true,
      style: 'compressed'
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
