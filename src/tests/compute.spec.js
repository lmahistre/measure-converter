const compute = require('../js/services/compute.js');

describe('compute', function() {
	it ('type centimeter', function() {
		expect(compute('2.54', 'centimeter')).toEqual({
			centimeter : '2.54',
			inch : 1,
		});
	});

	it ('type inch', function() {
		expect(compute('1', 'inch')).toEqual({
			centimeter : 2.54,
			inch : '1',
		});
	});
});