// The Set object lets you store unique values of any type, whether primitive values or object references
// iterate through the elements of a set in insertion order
const mySet1 = new Set()

mySet1.add(1)           // Set [ 1 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add(5) 


// .entries, .keys, .values

// Loop 1
const iterable = new Set([1, 1, 2, 2, 3, 3]);
for (const value of iterable) {
//   console.log(value); 1, 2,3 
}