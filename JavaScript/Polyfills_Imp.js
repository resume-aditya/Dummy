// Object.create
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

// To make private:
const PubSub = (function(){
    // private variables and data
    return class _PubSubInternal{
        // public methods and data
    }
})();

// The outer function executes immediately as the script is processed and the function inside it gets called and it returns _PubSubInternal.
// Since we are returning _PubSubInternal from inside the function, 
// all the variables and methods declared inside the function will be accessible to this returned class 
// (but not to instantiated object of this class)
// Closure MAGIC