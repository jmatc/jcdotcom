module.exports = function (grunt, options) {
	return {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/{,**/}test-*.js']
      }
	};
};
