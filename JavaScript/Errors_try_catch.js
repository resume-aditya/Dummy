// If the finally-block returns a value, this value becomes the return value of the entire try-catch-finally statement, regardless of any return statements in the try and catch-blocks

// Throw a generic error : 
try {
    throw new Error('Whoops!')
  } catch (e) {
    console.error(e.name + ': ' + e.message) // Error: whoops
  }

// cusotm error
    class MyError extends Error {
        constructor(message) {
        // Needs to pass both `message` and `options` to install the "cause" property. 
        super(message);
        this.name = "MyError"
        }
    }
    throw new MyError('something went wrong')

//   Handle multiple error
try {
    foo.bar()
} catch (e) {
if (e instanceof EvalError) {
    console.error(e.name + ': ' + e.message)
} else if (e instanceof RangeError) {
    console.error(e.name + ': ' + e.message)
}
else {
    // If none of our cases matched leave the Error unhandled
    throw e;
}
}

