// Bundling
// Most React apps will have their files “bundled” using tools like Webpack, Rollup or Browserify.
//  Bundling is the process of following imported files and merging them into a single file: a “bundle”. 
// This bundle can then be included on a webpage to load an entire app at once.



// Splitting
// To avoid winding up with a large bundle, it’s good to get ahead of the problem and start “splitting” your bundle. 
// Code-Splitting is a feature supported by bundlers like Webpack, Rollup and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime.

// Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, 
// which can dramatically improve the performance of your app. 

// While you haven’t reduced the overall amount of code in your app, 
// you’ve avoided loading code that the user may never need, 
// and reduced the amount of code needed during the initial load.

// Usage
// From :-> 
import { add } from './math';
console.log(add(16, 26));
// To: ->
import("./math").then(math => {
    console.log(math.add(16, 26));
  });

  // When Webpack comes across this syntax, 
  // it automatically starts code-splitting your app. 
  // If you’re using Create React App, this is already configured for you and you can start using it immediately.