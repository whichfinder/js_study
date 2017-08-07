(function makeBuffer () {
	
	var tt = [];

	function buffer() {
		return buffer;
	}

	buffer.text = function(text) {
		return tt.push(text);
	}

	buffer.print = function() {
		return tt;	
	}	

	return buffer;
};)	