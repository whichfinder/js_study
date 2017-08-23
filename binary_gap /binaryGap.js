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


// n=6=110_2
// n=328=101001000_2

// n=5=101_2, 
// n=16=2**4 
// and n=1024=2**10

// n=51712=110010100000000_2 
// and n=20=10100_2