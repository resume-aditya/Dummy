// Map: 
// The Map object holds key-value pairs 
// It remembers the original insertion order of the keys
// Anything can be used as an key
// for of loop returns an array of Key Value for each iteration
// NaN can also be used as a key
// Array.from(myMap) or Array.from(myMap.keys()) or Array.from(myMap.values())

const map1 = new Map();
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

// Important Functions
map1.get('a') //97
map1.size //3
map1.delete('b')
map1.clear() //removes all keys


// Iterable functions
        // Entries - return an iterator for  array of key value pair
              map1.entries() // [a, 1] [b, 2] [c, 3]
        // Keys - return an iterator for  array of keys
        // Value - return an iterator for  array of values

// Loop 1:
const iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const entry of iterable) {
  console.log(entry);
}
// ['a', 1] ['b', 2] ['c', 3]

// Loop 2
for (const [key, value] of myMap) {
  console.log(key + ' = ' + value)
}

for (const key of myMap.keys()) {
  console.log(key)
}