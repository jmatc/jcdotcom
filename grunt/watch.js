module.exports = function (grunt, options) {
	return {
		files: [
			'Gruntfile.js',
			'grunt/*',
			'test/*',
			'model/*.json',
			'lib/{,**/}*.js',
			'template/{,**/}*.{mustache,json}',
			'views/*.mustache',
			'*.less',
		],
		tasks: ['build'],
		options: {
			livereload: true,
      spawn: false,
      debounceDelay: 100
		}
	};
};
