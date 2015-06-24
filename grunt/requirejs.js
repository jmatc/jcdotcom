module.exports = function (grunt, options) {
	return {
		'<%= cfg.name %>-amd': {
			options: {
				baseUrl: 'lib',
	      name: '<%= cfg.name %>',
				out: 'dist/<%= cfg.name %>.amd.js',
				optimize: 'none',
				paths: {
	        'jquery': 'empty:',
	        'hogan': 'empty:'
	      },
				cjsTranslate: true,
				keepAmdefine: false
			}
		},
		'<%= cfg.name %>-amd-min': {
			options: {
				baseUrl: 'lib',
	      name: '<%= cfg.name %>',
				out: 'dist/<%= cfg.name %>.amd.min.js',
				optimize: 'uglify2',
				paths: {
	        'jquery': 'empty:',
	        'hogan': 'empty:'
	      },
	      preserveLicenseComments: false,
	      cjsTranslate: true,
	      keepAmdefine: false,
	      generateSourceMaps: true
			}
		}
	};
};
