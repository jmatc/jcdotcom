module.exports = function (grunt, options) {
	return {
		server: {
			options: {
				hostname: '*',
				port: process.env.PORT || '6789',
				base: '.'
			}
		},
		keepalive: {
			options: {
				hostname: '*',
				port: process.env.PORT || '0',
				base: '.',
				keepalive: true
			}
		}
	};
};
