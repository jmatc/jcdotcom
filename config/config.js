require.config({
  baseUrl: window.location.pathname,
  paths: {
    'hotel-room-search': 'dist/hotel-room-search.amd',
    'jquery': 'node_modules/jquery/dist/jquery.min',
    'hogan': 'node_modules/hogan.js/dist/hogan-3.0.2.min.amd'
  }
});

requirejs(['lib/my-feature.js']);
