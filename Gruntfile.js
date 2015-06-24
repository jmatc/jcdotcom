module.exports = function(grunt) {
	'use strict';
	var options = {
		data: {
			pkg: grunt.file.readJSON('package.json'),
			cfg: grunt.file.readJSON('jacket-config.json')
		},
		init: true,
		loadGruntTasks: {
			pattern: 'grunt-!(cli)*'
		}
	};
	require('load-grunt-config')(grunt, options);
};
