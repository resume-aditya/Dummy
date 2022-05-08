'use strict'
console.log('lets run iterable and symbols')

let someObj = {
  a : 1,
  b : 2,
  c : 3,
  d : 4
};
console.log(Object.keys(someObj));
console.log(Object.values(someObj));
console.log(Object.entries(someObj));

for (let v of Object.values(someObj)){
  console.log(`${v}`)
}

for (let [k, v] of Object.entries(someObj)){
  console.log(` ${k} : ${v}`)
}



someObj[Symbol.iterator] = function () {
  return {
    i : 0,
    next () {
      this.i++;
      return {
        done : this.i > 4 ? true : false,
        value : 'Aditya' + this.i
      }
    }
  };
}
for (let v of someObj) {
  console.log('value is : ' + v)
}

var names = 'aditya';
console.log(names[Symbol.iterator]().next())

// Array from creates array out of iterable objects
let strArr = Array.from('aditya')
console.log(strArr)

let objArr = Array.from(someObj)
console.log(objArr)

let objArr1 = Array.from({
  a : 1,
  b : 2,
  c : 3,
  d : 4
})
console.log(objArr1)

if (!window.newOJET)
	console.log('yoyoyoyoyy')
