// Input: arr[] = {1, 5, 3, 2} 
// Output: 4 
// (1, 5) and (3, 2) -> 1 + 2 = 3 
// (1, 3) and (5, 2) -> 1 + 2 = 3 
// (1, 2) and (5, 3) -> 1 + 3 = 4
// Input: arr[] = {1, 3, 2, 1, 4, 5} 
// Output: 7 


// No matter how the pairs are formed, the maximum element from the array will always be ignored as it will be the maximum element in every pair it is put into

// So, to maximize the sum an optimal approach will be to sort the array and start making pairs in order starting from the maximum element.


function maxSum(a, n) {
	a.sort((a, b) => a - b);
	let sum = 0;
	for (let i = 0; i < n - 1; i += 2) {
		sum += a[i];
	}
	return sum;
}
let arr = [1, 3, 2, 1, 4, 5];
let n = arr.length;

maxSum(arr, n)
