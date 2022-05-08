/////Closures
  //Smart Example
  function inBetween (a, b) {
    return function(v) {
      return v>=a && v<=b;
    }
  }
  let arr = [1, 2, 3, 4, 5, 6, 7];
  
  console.log( arr.filter(inBetween(3, 6)) );
  
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

//Any code block like a function has an object associtated with it called lexical scope
//it contains information about  the current thisand the local variable
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




// Simple Example

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


  // As you can see from above lexical scope is not shared
  // Each inner function has a copy of outer scope


//   Average  Example
function sum (a) {
    return b => a +b
  }
  console.log(sum(3)(5))
  let sum6 = sum(6)
  console.log(sum6(5))
  console.log(sum6(7))


// To make private:
const PubSub = (function(){
  // private variables and data
  return class _PubSubInternal{
      // public methods and data
  }
})();

// The outer function executes immediately as the script is processed and the function inside it gets called and it returns _PubSubInternal.
// Since we are returning _PubSubInternal from inside the function, 
// all the variables and methods declared inside the function will be accessible to this returned class 
// (but not to instantiated object of this class)
// Closure MAGIC