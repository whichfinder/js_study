function solution(A) {
	A = JSON.parse(A)
	var result = [];
	var a = {};
	for (i = 1; i < A.length; i++) {
			a['uniq'] = A[0];
	    	if (A.includes(a['uniq'])) {
	    		A.splice(A.indexOf(a['uniq']),1);
	    		A.splice(A[a['uniq']],1);
	    		a['uniq'] = A[0];
	        }
	        else {
	        	result.push(a['uniq'])
	        }
		return result;
}
}
