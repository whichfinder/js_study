function solution(A, K) {
	A = JSON.parse(A)
    var k = 0;
    if (A.length < 2) {return A;}
    while (k != K){
        val = A.splice(A.length-1, 1);
        A.unshift(parseInt(val))

        k++;
    }
    console.log('result ' + A)
    return A;
}