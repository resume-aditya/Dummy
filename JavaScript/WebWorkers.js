// Web Workers are a simple means for web content to run scripts in background threads. 
// The worker thread can perform tasks without interfering with the user interface.

// Once created, a worker can send messages to the JavaScript code that created it by posting messages to an event handler specified by that code or vice versas

// you can't directly manipulate the DOM from inside a worker, or use some default methods and properties of the window object.

// Use case
        // Prefetching and/or caching data for later use
        // Code syntax highlighting or other real-time text formatting
        // Spell checker
        // Analyzing video or audio data
        // Background I/O or polling of webservices
        // Processing large arrays or humungous JSON responses



// How to 
    var worker = new Worker('doWork.js');
    // If the specified file exists, the browser will spawn a new worker thread, which is downloaded asynchronously. The worker will not begin until the file has completely downloaded and executed.

    worker.postMessage(); // Start the worker.



            var worker = new Worker('doWork.js');

            worker.addEventListener('message', function(e) {
            console.log('Worker said: ', e.data);
            }, false);
            
            worker.postMessage('Hello World'); // Send data to our worker.


            // doWork.js (the worker):

            self.addEventListener('message', function(e) {
                self.postMessage(e.data);
            }, false);