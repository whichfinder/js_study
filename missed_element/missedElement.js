function solution(A) {
    var sum = A.reduce(function(a, b) { return a + b;});
    var total = ((A.length + 1)*(A.length + 2))/2;
    var result = total-sum;
    console.log(result);
    return result;
}