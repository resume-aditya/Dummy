// inputArray = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]]
// function flatten(inputArray) => output [1, 2, 3, 4, 5, 6, 7, 8, 9]

function flattenArray (inputArray) {
    let result = [];debugger
    for (let val of inputArray) {
        if (Array.isArray(val)) {
            result = result.concat(flattenArray.call(this, val))
        } else {
            result.push(val)
        }
    }
    return result;
}

console.log(flattenArray([1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]]))