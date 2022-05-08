//Every object in JS has a __proto__ through which it acheives prototypical inheritance or chaining

// every objects __proto__ is set to the Big Brother object which supply it with fucntions like  hasOwnKey, toString, isnumerableprop

//Now if we set any objects proto to another object, the child can access this new protos props also

// Now functions are also an object, but there __proto__ doesnt point to big bro Object, rather it refers to Function.prototype, hence getting call, apply, bind
        // function abc(){}
        // abc.__proto__.call
        //  NOT abc.prototype.call

// Functions also have an important property called prototype, whose value is an object having constructor property.
// You can define function on this Prototype (and on creating object they will appear for all)

// FUNCTION WITH NEW
    // 1. it runs the normal course  of constructor, which return an object having all the props defined in the constructor
    // 2. it sets the returned objects __proto__ to that of functions prototype

    function f(){}
    let funnyObj = new f();
    console.log(funnyObj.__proto__ == f.prototype) //true
    console.log(funnyObj instanceof f) // true

// funnObj.__proto__ --------> f.prototype. And this is by reference. So any change you make in parent prototype will reflect in child
// child change wont affect parent through special proto handling done in mostly setter


// Inheritance
function parent () { this.parent = 'i am parent'}
function child () { 
    parent.call(this)
    this.child = 'i am child'
}

child.prototype = Object.create(parent.prototype)
child.prototype.constructor = child

var somechild = new child()
console.log(somechild)
console.log(somechild.parent)
console.log(somechild instanceof child)
console.log(somechild instanceof parent) 


// Same for function

// Object.__proto__
// ƒ () { [native code] }

// Object.__proto__.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// Object.__proto__.__proto__.__proto__
// null