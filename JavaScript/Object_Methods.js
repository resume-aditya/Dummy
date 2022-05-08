// Data properties on Object
        // configurable | default : false
        // enumerable | default : false | whether the property is picked by Object.assign()|spread operator|forin
        // value
        // writable


        Object.defineProperty(obj, 'key', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: 'static'
          });


// Object.freeze() | Object.isFrozen()
        // freezes an object
        // A frozen object can no longer be changed
        // prevents new properties from being added to it
        // prevents existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties
        // freezing an object also prevents its prototype from being changed
        const obj = {
            prop: 42
          };
          Object.freeze(obj);

// Object.assign()
        // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object
        // It returns the modified target object.
        const target = { a: 1, b: 2 };
        const source = { b: 4, c: 5 };
        const returnedTarget = Object.assign(target, source);

// Object.defineProperty()
        // The static method Object.defineProperty() defines a new property directly on an object
        // or modifies an existing property on an object, and returns the object
        Object.defineProperty(object1, 'property1', {
            value: 42,
            writable: false
          });

// Object.entries()
        // returns an array of a given object's own enumerable string-keyed property [key, value] pairs  

// Object.fromEntries()
        //   Returns a new object from an iterable of [key, value] pairs

// Object.getOwnPropertyDescriptor()
        // Returns a property descriptor for a named property on an object
   
// Object.preventExtensions() | Object.isExtensible()
        //   prevents new properties from ever being added to an object
          