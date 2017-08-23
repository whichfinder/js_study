function solution(A) {
	A = JSON.parse(A)
	// var result = [];
	var a = {};
	param = true;
	while (param) {
			a['uniq'] = A.splice(0,1);
	    	if (A.includes(a['uniq'][0])) {
	    		A.splice(A.indexOf(a['uniq']),1);
	    		param = true;
	        }
	        else {
	        	param = false;
	        	return a['uniq'][0];
	        }
		
}
return result;
}
