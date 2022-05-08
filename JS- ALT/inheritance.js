console.log('lets learn inheritance Douglas crockford way')

//Every object in JS has a __proto__ through which it acheives prototypical inheritance or chaining
// every objects __proto__ is set to the Big Brother object which supply it with fucntions like  hasOwnKey, toString, isnumerableprop
//Now if we set any objects proto to another object, the child can access this new protos props also


//Now functions are also an object, but there __proto__ doesnt point to big bro Object, rather it refers to Function.prototype
//thats how thy get functions like call apply bind and props like length argument etc

//Functions also have an important property called prototype, whose value is an object having constructor property. SIince this is a normal object
// this prototypes __proto__ is unintresting since it points to big bro Object


// Now most important is that when an object is created by the new f() way, 
// -------> it runs the normal course  of constructor, which return an object having all the props defined in the constructor.
// ******** it sets the returned objects __proto__ to that of functions prototype**********

function f(){}
let funnyObj = new f();
console.log(funnyObj.__proto__ == f.prototype) //////true
console.log(funnyObj instanceof f)

/// funnObj.__proto__ --------> f.prototype. And this this by reference. So any change you make in parent prototype will reflect in child
// child change wont affect parent through special proto handling dine in mostly setter


//// Now to acheive inheritance what we want is child should have all properties of parents ----> so use call
// child prototype shoud have all functions from parent
// child should pass instanceof test with child and parent both

console.log('*****************************************************')

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



///Create polyfll for object create
Object.create = function(o) {
    let f = new function(){}
    f.__proto__ = o;
    return f;
}

Object.create = function(o) {
    function f () {}
    f.prototype = O;
    return new f()
}