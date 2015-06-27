module.exports = function () {
	return {
		files: [
			'Gruntfile.js',
			'grunt/{,**/}*.js',
			'lib/*.js'
		],
		options: {
			curly: true,
			debug: true,
			eqeqeq: true,
			globals: {
				console: true,
				define: true,
				require: true
			},
			immed: true,
			latedef: true,
			laxbreak: false,
			laxcomma: false,
			newcap: true,
			noarg: true,
			sub: true,
			undef: true,
			unused: true,
			boss: true,
			eqnull: true,
			node: true
		}
	};
};
