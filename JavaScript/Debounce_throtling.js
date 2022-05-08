// Whenever we’re attaching a performant-heavy function to an event listener, it’s considered best practice to control how often the function is called.

// Throttling will delay executing a function. 
// Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.



// Debouncing will bunch a series of sequential calls to a function into a single call to that function. It ensures that one notification is made for an event that fires multiple times.
// In the debouncing technique, no matter how many times the user fires the event, the attached function will be executed only after the specified time once the user stops firing the event.


// for example when a resize or mouse move event occurs, it can be called a lot of times.
//  If you don't want this behaviour, you can Throttle it so that the function is called at regular intervals.
//  Debouncing will mean it is called at the end (or start) of a bunch of events.

function debounce(fn, ms) {
    let timeout;
    return () => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn();
        }, ms);
    }
}

const printHello = () =>  console.log('hello')
const debouncedPrint = debounce(printHello, 1000);
// debouncedPrint()
// debouncedPrint()
// debouncedPrint()


function throttle(fn, ms) {
    let timeout;
    return () => {
        if (timeout) return;
        timeout = setTimeout(() => {
            fn();
            timeout = undefined;
        }, ms);
    }
}
const throttledPrint = throttle(printHello, 10);
for(let i = 0; i <10000;i++) {
    throttledPrint()
}

// This example wont work because line 45 always goes in function stack whihc will always get executed before any timeout
