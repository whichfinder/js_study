function factorial(val) {
	result = 1;
	while (val > 0) {
		result = result * val;
		val--;
	}
	console.log(result);
}


function isPrime(val) {
	for (i = 2; i < Math.sqrt(val); i++) {
		if (val % i == 0) {
			return false;
		}
		return true;
	}
}


function fibo(val) {
	var result = [0, 1];
	for (i = 2; i < val; i++) {
		result.push(result[i - 1] + result[i - 2]);
	}
	console.log(result);
}


function isSorted(mass) {
	for (i = 1; i < (mass.length); i++) {
		if (mass[i] < mass[i - 1]) {
			return false;
		}
		return true;
	}
}


function filterWithCallBack(mass, val, checkValsCallback) {
	checkValsCallback(mass, val);
	return result
}
function checkVals(mass, val) {
	result = [];
	for (i = 0; i < mass.length; i++) {
		if (mass[i] < val) {
			result.push(mass[i]);
		}
	}
}


function reduce(mass) {
	var result = 0;
	for (i = 0; i < mass.length; i++) {
		result = result + mass[i];
	}
	return result;
}


function reverse(someString) {
	var result;
	mas = someString.split('');
	result_arr = [];
	for (m = mas.length; m >= 0; m--) {
		result_arr.push(mas[m]);
	}
	result = result_arr.join('');
	return result;
}


function indexOf(mas, value) {
	var result;
	for (index = 0; index < mas.length; index++) {
		if (mas[index] == value) {
			result = index;
			break;
		}
	}
	if (result) {
		return result;
	} else {
		console.log('not found');
	}
}


function isPal(someStr) {
	var text = someStr.toLowerCase()
	text = text.split('');
	text = text.filter(i => i.charCodeAt() != 32) // remove all spaces
	if (text.join() != text.reverse().join()) {
		console.log(text);
		console.log(text.reverse().join());
		return false;
	}
	return true;
}


function missing(mas) {
	m = mas.sort()
	for (i = 0; i < m.length; i++) {
		if ((m[i + 1] - m[i]) == (m[i + 2] - m[i + 1])) {
			continue;
		} else if ((m[i + 1] - m[i]) > (m[i + 2] - m[i + 1])) {
			return m[i] + 1;
		} else if ((m[i + 1] - m[i]) < (m[i + 2] - m[i + 1])) {
			return m[i + 1] + 1;
		} else {
			continue;
		}
	}
}


function isBalanced(someStr) {
	var res1 = 0;
	var res2 = 0;
	var mas = someStr.split('');
	for (m = 0; m <= mas.length; m++) {
		if (mas[m] == '{') {
			res1++;
			console.log('count { ' + res1)
			continue;
		} else if (mas[m] == '}') {
			res2++;
			console.log('count } ' + res2);
			continue;
		} else {
			continue;
		};

	};
	if (res1 == res2) {
		return true;
	} else {
		return false;
	};

};