// Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value
// It is guaranteed to be unique
// Symbols are not enumerable in for...in iterations.
// Symbol-keyed properties will be completely ignored when using JSON.stringify():

// USAGE: Symbols are used to add unique property keys to an object that won’t collide with keys any other code might add to the object

let sym1 = Symbol()
let sym2 = Symbol('foo')
let sym3 = Symbol('foo')
// all are unique

// Example:
let sym = Symbol('foo')
let obj = {[sym]: 1}
obj[sym] 


// Shared Symbols in the global Symbol registry
Symbol.for('state'); // if present will return or create one
