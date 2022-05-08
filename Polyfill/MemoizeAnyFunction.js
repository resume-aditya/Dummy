const memoizeAny = (fn) => {
  let cache = {}
  return function (...args) {
    const argsKey = JSON.stringify(args);
    if (!argsKey in cache){
      cache[argsKey] = fn.apply(this, args);
    }
    return cache[argsKey]
  }
}


let factorial = memoizeAny(function(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
});

console.log(factorial(10))