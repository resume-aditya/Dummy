// Flatten nested array

/***
 * Elegant solution
 * Using reduce
 * 
    const flatten = (arr) => {
    return arr.reduce((accu, current) => {
        return accu.concat(Array.isArray(current) ? flatten(current) : current)
    }, [])
    }
 * 
 */


const input = [1,2,[3,4,[5,6],7],8,[9,[10,11]]] 


const flatten = (arr, finalArr = []) => {
    for(let item of arr) {
        if (Array.isArray(item)) {
            flatten(item, finalArr)
        } else {
            finalArr.push(item)
        }
    }
    return finalArr;
}

console.log(flatten(input))

if (!Array.prototype.flatten) {
    Array.prototype.flatten = function () {
        return flatten(this);
    }
}

console.log('treating flatten as inbuilt function', input.flatten())