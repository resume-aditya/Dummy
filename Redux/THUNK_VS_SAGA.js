// What are the differences between redux-saga and redux-thunk?

// Both Redux Thunk and Redux Saga take care of dealing with side effects. 
// In most of the scenarios, Thunk uses Promises to deal with them, whereas Saga uses Generators. 
// Thunk is simple to use and Promises are familiar to many developers, 
// Sagas/Generators are more powerful but you will need to learn them. 
// But both middleware can coexist, so you can start with Thunks and introduce Sagas when/if you need them.