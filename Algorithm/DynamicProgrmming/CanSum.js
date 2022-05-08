// function takes TARGETSUM and array of number as argument
// return BOOLEAN whether the number in array can result into the target sum

function canSum(targetSum, arr) {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    for (let num of arr) {
        if(canSum(targetSum-num, arr)) return true
    }
    return false
}

console.log(canSum(7, [1, 7, 2]))
console.log(canSum(7, [1, 6, 2]))
console.log(canSum(7, [7, 2]))
