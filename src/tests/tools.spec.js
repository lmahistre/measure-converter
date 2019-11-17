const tools = require('../js/services/tools.js');

describe('tools', function() {
	it ('intval', function() {
		expect(tools.intval('15')).toBe(15);
		expect(tools.intval('14.4')).toBe(14);
		expect(tools.intval('f')).toBe(0);
		expect(tools.intval('')).toBe(0);
	});

	it ('floatval', function() {
		expect(tools.floatval('21')).toBe(21);
		expect(tools.floatval('1.5235')).toBe(1.5235);
	});

	it ('validateFloat', function() {
		expect(tools.validateFloat('21A')).toBe('21');
	});
});