module.exports = function (grunt, options) {
	return {
	    compile: {
	      dest: 'lib/<%= pkg.name %>/template.js',
	      src: 'template/*.mustache',
	      options: {
	        binderName: 'amd'
	      }
	    }
	};
};
