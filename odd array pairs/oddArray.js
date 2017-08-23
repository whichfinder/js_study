function solution(A) {
	A = JSON.parse(A)
	var result = [];
	var a = {};
	param = true;
	while (param) {
			a['uniq'] = parseInt(A.splice(0,1));
	    	if (A.includes(a['uniq'])) {
	    		A.splice(A.indexOf(a['uniq']),1);
	    		// A.splice(A[a['uniq']],1);
	    		// a['uniq'] = parseInt(A.splice(0,1));
	    		param = true;
	        }
	        else {
	        	result.push(a['uniq'])
	        	param = false;
	        }
		
}
return result;
}
