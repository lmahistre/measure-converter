
exports.intval = function(val) {
	let a = parseInt(val);
	if (isNaN(a)) {
		a = 0;
	}
	return a;
}

exports.floatval = function(val) {
	let a = parseFloat(val);
	if (isNaN(a)) {
		a = 0;
	}
	return a;
}

exports.validateFloat = function(val) {
	return (''+val).replace(/[^0-9.]/g, '');
}
