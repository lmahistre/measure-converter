const BigNumber = require('bignumber.js');

const tools = require('./tools');

exports.convertCentimeterToInch = function(cm) {
	const dividend = new BigNumber(tools.floatval(cm));
	return dividend.dividedBy(2.54).toString();
	// return tools.floatval(cm) / 2.54;
}

exports.convertInchToCentimeter = function(inch) {
	return tools.floatval(inch) * 2.54;
}

exports.convertKilogramToPound = function(kg) {
	return tools.floatval(kg) * 0.45359237;
}

exports.convertPoundToKilogram = function(kg) {
	return tools.floatval(kg) / 0.45359237;
}
