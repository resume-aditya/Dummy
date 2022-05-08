// Every object in JS has a __proto__ through which it acheives prototypical inheritance or chaining

// every objects __proto__ is set to the Big Brother object which supply it with fucntions like  hasOwnKey, toString, isnumerableprop

//Now if we set any objects proto to another object, the child can access this new protos props also

// Now functions are also an object, but there __proto__ doesnt point to big bro Object, rather it refers to Function.prototype, hence getting call, apply, bind

// Functions also have an important property called prototype, whose value is an object having constructor property.
// You can define function on this Prototype (and on creating object they will appear for all)

// FUNCTION WITH NEW
    // 1. it runs the normal course  of constructor, which return an object having all the props defined in the constructor
    // 2. it sets the returned objects __proto__ to that of functions prototype