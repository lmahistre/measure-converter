const BigNumber = require('bignumber.js');

const tools = require('./tools');

const CM_PER_INCH = 2.54;
const POUND_PER_KG = 0.45359237;

exports.convertCentimeterToInch = function(input) {
	return (new BigNumber(tools.floatval(input))).dividedBy(CM_PER_INCH).toFixed();
}

exports.convertInchToCentimeter = function(input) {
	return (new BigNumber(tools.floatval(input))).multipliedBy(CM_PER_INCH).toFixed();
}

exports.convertKilogramToPound = function(input) {
	return (new BigNumber(tools.floatval(input))).multipliedBy(POUND_PER_KG).toFixed();
}

exports.convertPoundToKilogram = function(input) {
	return (new BigNumber(tools.floatval(input))).dividedBy(POUND_PER_KG).toFixed();
}

exports.convertCelsiusToFahrenheit = function(input) {
	return (new BigNumber(tools.floatval(input))).multipliedBy(9).dividedBy(5).plus(32).toFixed();
}

exports.convertFahrenheitToCelsius = function(input) {
	return (new BigNumber(tools.floatval(input))).minus(32).multipliedBy(5).dividedBy(9);
}
