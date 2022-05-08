const canSum = (targetSum, arr) => {
    let table = Array(arr.length+1).fill().map(() => Array(targetSum+1).fill(false));

    console.log(table)
}

canSum(7, [1, 7, 2])


// 00000000
// 00000000
// 00000000
// 00000000