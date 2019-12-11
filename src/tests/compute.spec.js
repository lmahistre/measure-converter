const compute = require('../js/services/compute');

describe('compute length', function() {
	it ('type centimeter', function() {
		expect(compute.length('2.54', 'centimeter')).toEqual({
			centimeter : '2.54',
			inch : 1,
		});
	});

	it ('type inch', function() {
		expect(compute.length('1', 'inch')).toEqual({
			centimeter : 2.54,
			inch : '1',
		});
	});
});