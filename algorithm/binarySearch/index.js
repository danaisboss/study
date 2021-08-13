function binarySearch(sortedArray, seekElement) {
	let startIndex = 0;
	let endIndex = sortedArray.length - 1;

	while (startIndex <= endIndex) {
		const middleIndex = Math.floor((endIndex + startIndex) / 2);
		if (sortedArray[middleIndex] === seekElement) {
			return middleIndex;
		}
		if (sortedArray[middleIndex] < seekElement) {
			startIndex = middleIndex + 1;
		} else {
			endIndex = middleIndex - 1;
		}
	}

	return -1;
}

const nums = [10, 40, 50, 30, 60, 70, 80, 90, 20];
const sortedNums = nums.sort();

console.log(binarySearch(sortedNums, 30)); // 2
