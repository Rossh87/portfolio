function quickSort(arr) {
	let copy = arr.slice();

	let len = copy.length - 1;

	function swap(left, right) {
		let temp = copy[left];
		copy[left] = copy[right];
		copy[right] = temp;
	}

	function sortOne(lPoint, rPoint) {
		let pivot = rPoint;

		rPoint -= 1;

		// Do loop if pointers not touching
		while(lPoint < rPoint) {
			// Advance left while less than pivot
			while(copy[lPoint] < copy[pivot]) {
				lPoint++
			}

			// Advance right while greater than pivot
			while(copy[rPoint] > copy[pivot]) {
				rPoint--;
			}

			// No left-right swap if left has reached right
			if(lPoint >= rPoint) {
				break;
			}
			

			// Swap if pointers not touching
			if(lPoint < rPoint) {
				swap(lPoint, rPoint)
			}
		}

		// Swap left pointer w/ pivot and return left pointer position;
		swap(lPoint, pivot);

		return lPoint;
	}

	function sortAll(lPoint, rPoint) {
		debugger;
		if(rPoint - lPoint <= 0) {
			return;
		};

		let newPivot = sortOne(0, len);

		sortAll(0, newPivot - 1);

		sortAll(newPivot + 1, len);
	}

	sortAll(0, len);

	return copy;
}