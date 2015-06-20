var pkg = require('../package.json');

require.config({
  baseUrl: window.location.pathname,
  paths: {
    '<%= pkg.name %>': 'dist/<%= pkg.name %>.amd',
    'jquery': 'node_modules/jquery/dist/jquery.min',
    'hogan': 'node_modules/hogan.js/dist/hogan-3.0.2.min.amd'
  }
});

requirejs(['lib/<%= pkg.name %>.js']);
