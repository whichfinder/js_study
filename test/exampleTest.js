var test = require('unit.js');
var js_start = require('../js_start.js');
var assert = require('assert')

describe("function factorial", function() {

	it("return expected result for value", function() {
		
		assert.equal(120, js_start._test.factorial(5));
	});

	it("return false if answer is wrong", function() {
		assert.notEqual(123, js_start._test.factorial(5));
	});

	it("check passed param", function() {
		assert.fail(js_start._test.factorial(-1), -1, 'value should be number');
	});

});
