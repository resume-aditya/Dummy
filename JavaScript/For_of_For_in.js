// for in iterates over keys of string (ignoring symbols)
// Random order
// During a loop
        //  A property that is deleted before it has been visited will not be visited later
        // Properties added to the object over which iteration is occurring may either be visited or omitted from iteration
        // So avoid modification, addition etc during loop
// To enforce that it goes thru only its property use hasOwnProperty() or getOwnPropertyNames
const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// For OF
//  creates a loop iterating over iterable objects
// String, array, Maps, Sets, ArrayLike -> nodelist etc
const array1 = ['a', 'b', 'c'];
for (const element of array1) {
  console.log(element);
}