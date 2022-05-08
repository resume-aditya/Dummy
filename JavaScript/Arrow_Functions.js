// New and concise way of creating functions

let sum = (a, b) => a + b;

// This inside arrow function
    // 1. arrow functions do not have this
    // 2. If this is accessed, it is taken from the outside

// Not having 'this' naturally means another limitation: 
//  IMPORTANT
// arrow functions can’t be used as constructors.They can’t be  called with new


//  Arrow functions also have no arguments variable.

