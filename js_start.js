function factorial(val) {
	result = 1
	while (val > 0) {
		result = result * val
		val--
	}
	console.log(result)
}


function isPrime(val) {
	for (i = 2; i < Math.sqrt(val); i++) {
		if (val % i == 0) {
			return false;
		}
		return true
	}
}


function fibo(val) {
	var result = [0, 1]
	for (i = 2; i < val; i++){
		result.push(result[i-1] + result[i-2])
	}
	console.log(result)
}


function isSorted(mass) {
	for (i = 1;i < (mass.length); i++) {
		if (mass[i] < mass[i-1]) {
			return false;
		}
		return true;
	}
}
