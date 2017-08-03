var test = require('unit.js');
var js_start = require('../js_start.js')

describe ("function factorial", function() {

	it("return expected result for value", function() {
		var result = factorial(5);

		expect(result).toEqual(120);
	});

});
