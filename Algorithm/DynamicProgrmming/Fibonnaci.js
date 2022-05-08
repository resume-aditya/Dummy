function fib(n) {
    let start = 0, second = 1, current;
    for (let i=0; i<n+1;i++) {
      if (i == 0 || i==1)
        current = i
      else{
        current = start + second;
        start = second;
        second = current;
      }
      console.log (current)
    }  
  }
  fib(7)

//   OR Recursively like:
// return nth fib num
let cache = {};
function fibR(n) {
  if(n==0 || n ==1 )
    return n;
  cache[n-1] = cache[n-1] ? cache[n-1] : fibR(n-1);
  cache[n-2] = cache[n-2] ? cache[n-2] : fibR(n-2);

  let result = cache[n-1] + cache[n-2];
  return result;
}
console.log(`fib num on  pos is : ` + fibR(77))
