const compute = require('../js/services/compute');

describe('compute length', function() {
	it('type centimeter', function() {
		expect(compute.length('2.54', 'centimeter')).toEqual({
			centimeter : '2.54',
			inch : '1',
		});
	});

	it('type inch', function() {
		expect(compute.length('1', 'inch')).toEqual({
			centimeter : '2.54',
			inch : '1',
		});
	});
});

describe('compute weight', function() {
	it('type kilogram', function() {
		expect(compute.weight('1', 'kilogram')).toEqual({
			kilogram : '1',
			pound : '0.45359237',
		});
	});

	it('type pound', function() {
		expect(compute.weight('0.45359237', 'pound')).toEqual({
			kilogram : '1',
			pound : '0.45359237',
		});
	});
});
