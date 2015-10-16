var through = require('through2');
var _ = require('underscore');

module.exports = function (file, config) {

	if(!/\.html$/i.test(file)) return through();

	var inputString = '';

	function transform (buf, enc, next) {
		inputString += buf.toString();
		next();
	}

	function flush (next) {
		var compiled = _.template(inputString);
		var code = 'module.exports = ' + compiled.source;
		this.push(code);
		next();
	}

	return through(transform, flush);

};