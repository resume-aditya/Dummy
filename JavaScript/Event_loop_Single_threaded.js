// ****

// JavaScript allowing only one thread within the JavaScript environment at a time doesn't mean that the host (the browser) is single-threaded. An asynchronous ajax request is handed off to the browser's network handling.

// So when an ajax request completes (success, timeout, whatever), the browser (on a non-JavaScript thread, probably) puts a job in the JavaScript job queue to call the ajax callback. The JavaScript thread picks up that job and calls the callback.
// *****


// Below the covers, javascript has an event queue. Each time a javascript thread of execution finishes, it checks to see if there is another event in the queue to process. If there is, it pulls it off the queue and triggers that event (like a mouse click, for example).

// The native code networking that lies under the ajax call will know when the ajax response is done and an event will get added to the javascript event queue. How the native code knows when the ajax call is done depends upon the implementation. It may be implemented with threads or it may also be event driven itself (it doesn't really matter). The point of the implementation is that when the ajax response is done, some native code will know it's done and put an event into the JS queue.

// If no Javascript is running at the time, the event will be immediately triggered which will run the ajax response handler. If something is running at the time, then the event will get processed when the current javascript thread of execution finishes. There doesn't need to be any polling by the javascript engine. When a piece of Javascript finishes executing, the JS engine just checks the event queue to see if there is anything else that needs to run. If so, it pops the next event off the queue and executes it (calling one or more callback functions that are registered for that event). If nothing is in the event queue, then the JS interpreter has free time (garbage collection or idle) until some external agent puts something else in the event queue and wakes it up again.

// Because all outside events go through the event queue and no event is ever triggered while javascript is actually running something else, it stays single threaded.