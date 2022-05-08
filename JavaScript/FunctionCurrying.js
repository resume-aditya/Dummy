// Currying is an advanced technique of working with functions. 

// Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

// Currying doesn’t call a function. It just transforms it.

function curry(f) { // curry(f) does the currying transform
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  function sum(a, b) {
    return a + b;
  }
  let curriedSum = curry(sum);
  alert( curriedSum(1)(2) ); // 3

//   There can be other variants of currying too i.e. fully currying, partial currying (calling the fx in original form)

function sum(a, b) {
    return a + b;
  }
let curriedSum1 = _.curry(sum); // using _.curry from lodash library
alert( curriedSum(1, 2) ); // 3, still callable normally
alert( curriedSum(1)(2) ); // 3, called partially