function factorial(val) {
	result = 1
	while (val > 0) {
		result = result * val
		val--
	}
	console.log(result)
}

function isPrime(val) {
	for (i = 1; i < val; i++) {
	if (val > 0 && val % 1 == 0 && val % val == 0 && val % Math.sqrt(val) != 0 && val % (Math.sqrt(val) - 1) != 0 && val % (Math.sqrt(val) + 1) != 0) {
		console.log(val)
		return true
	}
	else if (val < 0) {
		console.log('negative value')
	}
	else {
		console.log(val)
		return false
	}
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
	result_mass = []
	for (i = 1;i < (mass.length); i++) {
		if (mass[i] > mass[i-1]) {
			console.log('sorted')
		}
		else {
			console.log(i)
			console.log("unsorted")
			break;
		}
	}
}
