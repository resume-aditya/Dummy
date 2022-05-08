// Async
// It can be placed before any function 
// That function starts to returns a promise
// Its values are wrapped in a resolved promise automatically

// Example
function returnOne() { return 1}
console.log(returnOne()) // 1

async function returnOne() {return 1}
console.log(returnOne()) // Fullfilled Promise
console.log(returnOne().then((data)=>console.log(data, 34))) // 1, 34

// Await
// The keyword await makes JavaScript wait until that promise settles and returns its result.
// It is only valid inside a async function
//** await literally 'suspends only the function execution' until the promise settles, and then 'resumes it with the promise result' */
//That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

async function asyncTimer() {
    let promise = new Promise((res, rej) => {
        setTimeout(() => {
            res('I am done')
        }, 1000);
    })
    let promisedData = await promise;
    console.log(promisedData)
    // promise.then((data) => console.log('promise data : ', data)) // Dont expect this to print before below, this gets into microtask queue
    console.log('Now I am done')
}
asyncTimer()

// Cool stuff with await. you can directly wait for apis/function wchih returns promises

let response = await fetch('http://api.github.com/users');
let user = await response.json();
console.log(user);

// Await with Promise.all
// wait for the array of results
let results = await Promise.all([
    fetch(url1),
    fetch(url2)
  ]).then(values => {});





//   MDN--------------------
// The async keyword gives you a simpler way to work with asynchronous promise-based code. Adding async at the start of a function makes it an async function:

// async function myFunction() {
//   // This is an async function
// }
// Inside an async function you can use the await keyword before a call to a function that returns a promise. This makes the code wait at that point until the promise is settled, at which point the fulfilled value of the promise is treated as a return value, or the rejected value is thrown.

// This enables you to write code that uses asynchronous functions but looks like synchronous code.