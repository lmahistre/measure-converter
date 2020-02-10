const converter = require('../js/services/converter.js');

describe ('converter', function() {
	it ('convertCentimeterToInch', function() {
		expect(converter.convertCentimeterToInch('25400')).toBe('10000');
		expect(converter.convertCentimeterToInch('2.54')).toBe('1');
	});

	it ('convertInchToCentimeter', function() {
		expect(converter.convertInchToCentimeter('1')).toBe('2.54');
		expect(converter.convertInchToCentimeter('10000')).toBe('25400');
	});
});
