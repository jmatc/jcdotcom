module.exports = function () {
	return {
		sass: {
			files: 'assets/{,**/}*.scss',
			tasks: ['sass']
		},
		js: {
			files: [
				'Gruntfile.js',
				'grunt/*',
				'lib/*.js'
			],
			tasks: ['browserify']
		},
		altAssets: {
			files: 'assets/images/*',
			tasks: ['imagemin']
		}
	};
};
