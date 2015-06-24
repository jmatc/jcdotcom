module.exports = function (grunt, options) {
	return {
	    compile: {
	      dest: 'lib/<%= cfg.name %>/template.js',
	      src: 'template/*.mustache',
	      options: {
	        binderName: 'amd'
	      }
	    }
	};
};
