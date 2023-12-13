const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < arr.length / 2; i++) {
	if (arr[i] !== arr[arr.length - 1 - i]) console.log(arr[i], arr[arr.length - 1 - i])
}
