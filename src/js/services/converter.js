const tools = require('./tools.js');

exports.convertCentimeterToInch = function(cm) {
	return tools.floatval(cm) / 2.54;
}

exports.convertInchToCentimeter = function(inch) {
	return tools.floatval(inch) * 2.54;
}
