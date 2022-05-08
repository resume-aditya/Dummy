// a higher-order component is a function that takes a component and returns a new component
// it's a pattern that is derived from React's compositional nature.

// Simplest example :
export default function HOC(WrappedComp) {
  return function (props) {
    return <WrappedComp {...props} />;
  };
}

// Dont mutuate original comp
// Static Methods Must Be Copied Over



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