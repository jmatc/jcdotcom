module.exports = function () {
	return {
		sass: {
			files: 'assets/{,**/}*.scss',
			tasks: ['sass']
		},
		templates: {
			files: '{,**/}*.jade',
			tasks: ['staticPages']
		},
		js: {
			files: [
				'Gruntfile.js',
				'grunt/*',
				'lib/{,**/}.js'
			],
			tasks: ['uglify']
		},
		altAssets: {
			files: 'assets/images/*',
			tasks: ['imagemin']
		}
	};
};
