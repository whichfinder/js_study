function solution(A) {
	A = JSON.parse(A)
	while (A.length > 1) {
		for (i = 1; i < A.length; i++) {
	    	if (A[0] == A[i]) {
	    		A.splice(0,1);
	        	A.splice(i-1,1);
	        	i = 1;
	        }
		}
	}
console.log(A);
return A;
}
