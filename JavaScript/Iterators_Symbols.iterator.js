let range = {
    from: 1,
    to: 5
  };

range[Symbol.iterator] = function() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };
  for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
  }

//   Calling an iterator explicitly
let str = "Hello";
// for (let char of str) alert(char);
let iterator = str[Symbol.iterator]();
while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // outputs characters one by one
}