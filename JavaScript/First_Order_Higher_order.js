// the functions that use only primitives or objects as arguments, and only return primitives or objects are named first-order functions.

// The functions that use other functions as arguments or return functions are named higher-order functions.

// So, in JavaScript a function can be either first-order or higher-order.


function calculate(operation, initialValue, numbers) {
    let total = initialValue;
    for (const number of numbers) {
      total = operation(total, number);
    }
    return total;
  }
  function sum(n1, n2) {
    return n1 + n2;
  }
  function multiply(n1, n2) {
    return n1 * n2;
  }
  calculate(sum, 0, [1, 2, 4]);      // => 7
  calculate(multiply, 1, [1, 2, 4]); // => 8


//   For example, the array.map(mapperFunc) method is a higher-order function because it accepts a mapper function as an argument:

const numbers = [1, 2, 4];
const doubles = numbers.map(function mapper(number) {
  return 2 * number;
});
doubles; // [2, 4, 8]