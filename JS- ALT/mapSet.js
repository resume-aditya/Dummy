"use strict"
console.log('lets study maps')

// maps are just like objects storing keyed data, difference being keys can be of any type
// whereas in objects it can be only string or symbol

var map = new Map ()
map.set(1 , 'someVal')
map.set('someKey', 2)
map.set(true, true)
map.set(false, false)
console.log(map)
map.set(1, 'newSomeVal')
console.log(map)
console.log(`
  map size is ${map.size}
  map.has key true ${map.has(true)}
  map get value ${map.get(false)}
  map keys ${map.keys()}
`)
//map.clear()

let someO = {name : 'aditya'}
map.set(someO, 'sharma')
console.log(map)
console.log(map.get({name : 'aditya'}))
console.log(map.get(someO))
console.log(`
  map size is ${map.values()}
  map keys ${map.keys()}
  map keys ${map.entries()}
`)
console.log(`
  map size is ${map.values().next().value}
  map keys ${map.keys().next().value}
  map keys ${map.entries().next().value}
`)

map.forEach((k, v) => {console.log(`${k} : ${v}`)})

let newMap = new Map([[2, 'someVal'],['someK', 5]])
console.log(newMap)
let objSome = {firstName : 'james', lastName : 'bond'}
console.log(Object.entries(objSome))
console.log(new Map(Object.entries(objSome)))
console.log(Object.fromEntries(Object.entries(objSome)))
console.log(Object.fromEntries(newMap.entries(objSome)))
console.log(Object.fromEntries(map))



//Set is a collection of unique values stored without keys
//set.add is used to add values and if it is duplicate it doesnt get added
// good use case for dictionary
let set = new Set(['aditya', 'sharma'])
set.add({some : 'fancyObj'})
set.add({some : 'fancyObj'})
console.log(set)
set.delete({some : 'fancyObj'})
console.log(set)
//set and map both uses === to check the value and key equality
//so the only way to get the samw value or delete is to use reference 

function unique(arr) {
  return new Set(arr)
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values))
values = [{name : "Hare"}, "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", {name : "Hare"},"Hare", "Hare", ":-O"
];
console.log(unique(values))



////////////////Weak map and sets
let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "lennon");
console.log(weakMap)
john = null;

setTimeout(()=>{console.log(weakMap)}, 9000)

//JSON
let obj12 = {
  name : 'aditya',
  toString() {
    return `{name: "${this.name}", age: ${this.age}}`;
  }
}
console.log(obj12)


//destructuring
let n = ['aditya', 'sharma']
let [firstN, lastN] = n;
console.log(firstN + lastN)
let [firstNm, lastNm] = 'james bond'.split(' ')
console.log(firstNm + lastNm)

let {fN, lN} = {fN : 'aditya', lN:'sharma'}
console.log(fN+lN)


