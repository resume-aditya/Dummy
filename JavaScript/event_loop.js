// The event loop is the secret behind JavaScript's asynchronous programming. JS executes all operations on a single thread, but using a few smart data structures, it gives us the illusion of multi-threading.

// What does it actually mean when we say JavaScript is single threaded?

// It means that the main thread where JavaScript code is run, runs in one line at a time manner and there is no possibility of running code in parallel

// Memory allocation in JavaScript:

        // 1) Heap memory: Data stored randomly and memory allocated.
        // 2) Stack memory: Memory allocated in the form of stacks. Mainly used for functions.

// Function call stack: The function stack is a function which keeps track of all other functions executed in run time.

// Event loop: An event loop is something (endles loop) that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty.

//  Inside the task queue, the tasks are broadly classified into two categories, namely micro-tasks and macro-tasks

//  MAcro Task : Examples: setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI Rendering

// Micro Task : Examples: process.nextTick, Promises, queueMicrotask, MutationObserver


        // Micro-tasks are often scheduled for things that are required to be completed immediately after the execution of the current script. 
        // On completion of one macro-task, the event loop moves on to the micro-task queue. 
        // The event loop does not move to the next task outside of the micro-task queue until the all the tasks inside the micro-task queue are completed. 
        // This implies that the micro-task queue has a higher priority.
        // The primary reason for prioritizing the micro-task queue is to improve the user experience. 
        // In such a case wherein new micro-tasks are being added to the queue, these additional micro-tasks are added at the end of the micro-queue and these are also processed.

        // Macro-task queue is often considered the same as the task queue or the event queue.
        // The only small difference between the two is that the task queue is used for synchronous statements whereas the macro-task queue is used for asynchronous statements.

        // When you call the setTimeout() function, make a fetch request, or click a button, the web browser can do these activities concurrently and asynchronously.

        // The setTimeout(), fetch requests, and DOM events are parts of the*** Web APIs*** of the web browser.
