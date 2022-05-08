"use strict"

function power (n, p) { 
  //return n**p;
  if (p ==1) return n;
  return n * power(n, p-1)
}
console.log(power(3,4)) //should return 81

console.log ('\n')

// Print fibonacci => 0 1 1 2 3 5 8 13 21

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



//rest arguments or ...
console.log('rest arguments or ...')
function testFun (arg1, arg2, ...args) {
  console.log(arg1)
  console.log(arg2)
  console.log(args)
}
testFun(1, 2, 3, 4, 5, 6, 7, 8)


console.log(...[1, 2, 3, 4])
testFun(...[1,2,3,4])
let mop = new Map()
mop.set('a', 1)
mop.set('b', 2)
mop.set('c', 3)
mop.set('d', 4)
testFun(mop.entries())
testFun(...mop)

console.log([1, 2, ...[3,4,5,6,[7,8,9]]])
console.log([1, 2, ...[3,4,5,6,...[7,8,9]]])

console.log(...'aditya')
console.log(...mop)
let ste = new Set()
ste.add('hero')
ste.add('heroine')
console.log(...ste)

for (let [some, v] of mop) {
  console.log(some +':' +v)
}

console.log(Array.from(mop.keys()))


/////Closures

/******
 * A closure is a function that remembers its outer variables and can access them.
 * in JavaScript, all functions are naturally closures 
 * 
 * When on an interview, a frontend developer gets a question about “what’s a closure?”,
 * a valid answer would be 
 * a definition of the closure and
 *  an explanation that all functions in JavaScript are closures, and 
 * maybe a few more words about technical details: the [[Environment]] property and how Lexical Environments work.
*****/

//Any code block like a function h n object associtated with it called lexical scope
//it contains information about the current this and the local variable
// also conains reference to the lexical scope of the outer block

// This is just a theoretical JS specificiation, meaning this LE cannot be manipulated from code, Browser engines
//can modify its working

//So now when there is a variable inside a block it is assigned to the lexical scope, and when engine reaches its
//execution its value is also assigned
//For functions, as soon as the script loads, even before it reaches fucntion declaration, functions gets initialized
// with its internal [[Environment]] property set to outer lexical scope.
// this instantaneous initialization is called function hoisting i.e. hoisting to top of block


// When a variable is accessed by its name inside a block, it is first looked for inside the current lexical scope and 
//if not found it moves outward till it reached null

// Now when a function has internal function
// and if this function is returned from the outer function
// A not so special thing happen i.e. closure
// when the outer function is called, its internal fucntion is initialized and its Environment property is set to
// outer fucntion lexical scope, its lexical scope is still not created
// Now when this internal fucntion is returned and called from elsewhere and JS engine reaches its block
// it creates a lexical block for this function with its outer property set to [[Environment]]
// Hence at any given point of time an inner function has access to outer functions variables
// but still this inside inner function will refer to its this, 
// accesssing outer function this wont make any sense, since it is not called it is simply reffered


function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter1 = makeCounter();
let counter2 = makeCounter();
let counter3 = makeCounter();
console.log('here comes the counter')
console.log(counter1())
console.log(counter2())
console.log(counter3())

console.log(counter1())
console.log(counter2())
console.log(counter3())

// As you can see from above lexical scope is not shared
// Each inner function has a copy of outer scope

//sum(a)(b) = a+b
function sum (a) {
  return b => a +b
}
console.log(sum(3)(5))
let sum6 = sum(6)
console.log(sum6(5))
console.log(sum6(7))


//arr.filter(f)
// arr.filter(inBetween(3,6)) – selects only values between 3 and 6.
// arr.filter(inArray([1,2,3])) – selects only elements matching with one of the members of [1,2,3]

function inBetween (a, b) {
  console.log(inBetween.name)
  return function(v) {
    return v>=a && v<=b;
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) );

///function declaration
function test () {}

//function expression
let t = function () {}
//Named function expression
let nfe = function namedFE () {}

//Extreme way to creta function =>
let testFunc = new Function ('a', 'console.log("Hello" + a)')
testFunc('aditya')
//no immediate lexical scope is provided to such fucntions, lets say this fx body refers to some let in string form
// but during the build process outet variable will gets initialized but string will still refer to origina one
// so by default it gets global scope or window




let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi.bind(user), 1000);