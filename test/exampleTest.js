var test = require('unit.js');
var js_start = require('../js_start.js');
var rewire = require('rewire');
var chai = require('chai');

fact = js_start.__get__('factorial')

describe ("function factorial", function() {

	it("return expected result for value", function() {
		var result = fact(5);

		expect(result).toEqual(120);
	});

});
