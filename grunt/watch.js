module.exports = function (grunt, options) {
	return {
		files: [
			'grunt/*',
			'test/*',
			'model/*.json',
			'*.{scss,less}',
			'views/*.{mustache,hbs}',
			'template/{,**/}*.{mustache,json}',
			'Gruntfile.js',
			'Gruntfile.coffee',
			'lib/{,**/}*.{js,coffee}'
		],
		tasks: ['build'],
		options: {
			livereload: true,
      spawn: false,
      debounceDelay: 100
		}
	};
};
