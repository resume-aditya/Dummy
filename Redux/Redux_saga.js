// redux-saga is a library that aims to make side effects (asynchronous things like data fetching and impure things like accessing the browser cache) in React/Redux applications easier and better.

// Philosophy:
// Saga is like a separate thread in your application, that's solely responsible for side effects

// redux-saga is a redux middleware, 
// which means this thread can be started, paused and cancelled from the main application with normal Redux actions, 
// it has access to the full Redux application state and it can dispatch Redux actions as well