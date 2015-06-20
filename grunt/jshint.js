module.exports = function (grunt, options) {
	return {
		files: [
			'Gruntfile.js',
			'grunt/*.js',
			'lib/**/*.js'
		],
		options: {
			laxbreak: false,
			laxcomma: false,
			debug: true,
			globals: {
				console: true,
				define: true,
				require: true
			}
		}
	};
};
