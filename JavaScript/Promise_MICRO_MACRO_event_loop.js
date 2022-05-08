// One go-around of the event loop will have exactly one task being processed from the macrotask queue (this queue is simply called the task queue in the WHATWG specification). 
// After this macrotask has finished, all available microtasks will be processed, namely within the same go-around cycle. 
// While these microtasks are processed, they can queue even more microtasks, which will all be run one by one, until the microtask queue is exhausted.


// What are the practical consequences of this?
    // If a microtask recursively queues other microtasks, it might take a long time until the next macrotask is processed. This means, you could end up with a blocked UI, or some finished I/O idling in your application.


    // macrotasks: setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering
// microtasks: process.nextTick, Promises, queueMicrotask, MutationObserver


// Promise handlers .then/.catch/.finally are always asynchronous.

// Even when a Promise is immediately resolved, the code on the lines below .then/.catch/.finally will still execute before these handlers.