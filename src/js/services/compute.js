const converter = require('./converter.js');
const tools = require('./tools.js');

exports.length = function(input, type) {
	const out = {};

	if (type == 'centimeter') {
		out.centimeter = tools.validateFloat(input);
		out.inch = converter.convertCentimeterToInch(out.centimeter);
	}
	else if (type == 'inch') {
		out.inch = tools.validateFloat(input);
		out.centimeter = converter.convertInchToCentimeter(out.inch);
	}
	else {
		return;
	}

	return out;
}

exports.weight = function(input, type) {
	const out = {};

	if (type == 'kilogram') {
		out.kilogram = tools.validateFloat(input);
		out.pound = converter.convertKilogramToPound(out.kilogram);
	}
	else if (type == 'pound') {
		out.pound = tools.validateFloat(input);
		out.kilogram = converter.convertPoundToKilogram(out.pound);
	}
	else {
		return;
	}

	return out;
}
