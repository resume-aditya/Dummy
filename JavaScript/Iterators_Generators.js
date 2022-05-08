// Regular functions return only one, single value (or nothing).
// Generators can return (“yield”) multiple values, one after another, on-demand.
// They work great with iterables, allowing to create data streams with ease.

// Advantages of Generators
    // Lazy Evaluation
    // Memory Efficient

// USe case:
    // Infinitely Repeating Array
    // Generating Unique Identifiers
          // function* generateSequence() {
            //   let i=0; while(true) {yield i++}
            // }
            // let generator = generateSequence();
    // *** for loops which need to be paused and resumed at a later date 
        function* makeGenLoop(arr) {
          for (const item of arr) {
            yield item;
          }
        }
        
        const myGen = makeGenLoop([0, 3, 7, 2, 5]);
        console.log(myGen.next());
    
    // ***

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
let generator = generateSequence();
for(let value of generator) { // basically this keeps on calling next()
  alert(value); // 1, then 2 
}




function* fibonacci() { // a generator function
    let [prev, curr] = [0, 1];
    while (true) {
      [prev, curr] = [curr, prev + curr];
      yield curr;
    }
  }
  for (const n of fibonacci()) {
    console.log(n);
    // truncate the sequence at 1000
    if (n >= 1000) {
      break;
    }
  }