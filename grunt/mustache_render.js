module.exports = function (grunt, options) {
  return {
    options: {
      data: 'model/app.json'
    },
    files: {
      'index.html': 'template/index.mustache'
    }
  }
};