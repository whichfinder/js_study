
function createList() {
	var result = [];
	for (i = 1; i < 10001; i++) {
		result.push(i)
	}
	
	function shuffle(array) {
  		var tmp, current, top = array.length;
  		if(top) while(--top) {
		    current = Math.floor(Math.random() * (top + 1));
		    tmp = array[current];
		    array[current] = array[top];
		    array[top] = tmp;
		}
  		return array;
	};

	return a = shuffle(result);
}


function benchmark() {
	var array = createList();
	console.log('array to be sorted ' + array)
	measureMerge()
	measureBubble()
	
	function measureMerge() {
		var start = new Date().getTime();
		mergeSort(array);
		var end = new Date().getTime();
		var time = end - start;
		console.log(time);
		console.log('execution time of mergeSort is ' + time)
	}

	function measureBubble() {
		var start = new Date().getTime();
		bubbleSort(array);
		var end = new Date().getTime();
		var time = end - start;
		console.log(time);
		console.log('execution time of bubbleSort is ' + time)
	}
}