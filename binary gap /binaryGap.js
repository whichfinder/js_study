function solution(N) {
    var maxGap = 0;
    if (typeof(N) == "number") {
        var binValue = parseInt(N, 10).toString(2);
        var valueArray = Array.from(binValue.toString())
        for (i = 0; i < valueArray.length; i++) {
            if (valueArray[i] == 0) {
                var longestGap = 0;
                while (valueArray[i] == 0) {
                    longestGap++;
                    i++;
                }
                if (longestGap > maxGap) {
                    maxGap = longestGap;
                }
            }   
        }
    console.log(maxGap)    
    return maxGap;  
    }
}