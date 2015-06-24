module.exports = function (grunt, options) {
	return {
		'<%= pkg.name %>-amd': {
			options: {
				baseUrl: 'lib',
	      name: '<%= pkg.name %>',
				out: 'dist/<%= pkg.name %>.amd.js',
				optimize: 'none',
				paths: {
	        'jquery': 'empty:',
	        'hogan': 'empty:'
	      },
				cjsTranslate: true,
				keepAmdefine: false
			}
		},
		'<%= pkg.name %>-amd-min': {
			options: {
				baseUrl: 'lib',
	      name: '<%= pkg.name %>',
				out: 'dist/<%= pkg.name %>.amd.min.js',
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
