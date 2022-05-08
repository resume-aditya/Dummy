"use strict"


console.log('hello world');
let num = 1; 
const someBday = "23rd June";

//  Data types
//  Number,BigInt, String, Boolean,null, undefined, Object, Symbol
const infinite = Infinity;
console.log(2 > infinite);
console.log(infinite > infinite);
console.log(infinite == Infinity);
console.log(Infinity);
console.log('\n');

//Backticks
let someString = `hello there 
${someBday}
now adding ${"1 " + "and " +"34 " + "to : " + (1 + 34)}`;
console.log(someString);

console.log('\n');

//Lets play with null and undefined
let a = null;
let b = undefined;
console.log("null is equal to undefined : " + (a == b));
console.log("null is not equal to undefined strict equal: " + (a === b));
console.log("null is equal to null : " + (a === null));
console.log("undefined is equal to undefined : " + (b === undefined));
console.log('\n');

//try some type convrsions
var bool = true;
console.log(typeof(true + ''));
console.log('4'/'3');
console.log(Number('we'));
console.log(Number('23'));
console.log(Number('null'));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("0!"));
console.log('\n');

//lets learn about operators
console.log("4 cube " + (4**3) );
console.log("sqrt of 64 " + (64 ** .5));
console.log("sqrt of 64 " + (64 ** (1/2)));
let someNum = 23;
console.log(1 + 4 + "hello");
console.log("hello" + 1 + 4);
console.log("unary : "+ (-someNum));
console.log('convert a string to number using unary + : ' +'34')
console.log('45' * '-2'); //redundant as * already does type conversion, see next
console.log("34" + "56");
console.log(+"34" + +"56");
console.log('assignment returns value : ' + (someNum + (someNum = 2+3)));
console.log(null + 8)
console.log(undefined + 8)
console.log('\n helloz');


//0, '', NaN, undefined, null are all falsy
//'0' is truth

//Output even num
for (var i = 2; i <= 10; i+=2) {
    if (!(i%2)){}
    //alert(i); // 0, 1, 2
  }

// object keys
let computed = 'someKey';
var obj = {
  someKey : 3,
  [computed] : 5
};
console.log(obj);

// shorthand
var aK=30, bK=true;
let obj1 = {
  aK,
  bK
};
console.log(obj1);
console.log(obj1.__proto__)
console.log('aK' in obj1);
console.log('aK3' in obj1);
for(let keys in obj1){
  console.log(keys);
  obj1['test'] = 3;
  console.log(obj1[keys]);
}
console.log(obj1);

//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise
// do it the most basic way
function isEmpty(obj) {
  let counter = 0;
  for(let prop in obj) {
    counter++;
  }
  if (!counter) {
    console.log('object is empty');
  } else {
    console.log('something in object');
  }
}
isEmpty({});
isEmpty({e:2});

// primitive and objrct references
let names = 'aditya';
let newName = names;
console.log(newName);
names = 'aditya sharma';
console.log(names);
console.log(newName);


// object cloning
let mainObj = {a:33, b:45};
let cloneObj = Object.assign({}, mainObj);
console.log(cloneObj);
mainObj.a='aditya';
console.log(cloneObj);
console.log(mainObj);
cloneObj = Object.assign({}, cloneObj, {junk:4444});
console.log(cloneObj);

let someJunk = {old : 'world'}
cloneObj = Object.assign({}, cloneObj, someJunk);
console.log(cloneObj);
someJunk.old='hi';
console.log(cloneObj);


cloneObj = Object.assign({}, cloneObj, {someJunk});
console.log(cloneObj);
someJunk.old = 'finally I will be the one';
console.log(cloneObj);

// Need deep cloning now, 
// recursively clone the inner objects also


// any thing, it  maybe object, variable, function etc that is accessible via some path by javascript engine is considered as reachable
// and is kept in memory, else it becomes available for garbage collection

// incoming reference matters, not the outgoing. the entity has to be accessible not what it can access from outside
// GC internally uses mark and sweep, start from root, traverse rescursively, mark all those that can be reached, sweep others


//function and this
function func1 () {
  console.log(this)
  function func2 () {
    console.log(this)
  }
  func2()
}
func1()

// this inside a function is unbounded, it does not depend on what it was during declaration. rather it is evaluated at the runtime


// {} this creates a object literal or a plain object
// if we want to create multiple objects of the same type, we will have to use "new" along with function

//lets create a complex class

function House (addr) {
  this.address = addr;
  console.log('how was i callled : ')
  console.log(new.target);
}

// when a function is callled with this, it first creates an objec, calls the function wit this set to this new object and then 
// returns this new object

//House('wakad');// undefined new target
new House('wakad')

// make constructor smart, make it behave as constructor even if called without new
function HouseNew (addr) {
  if (!new.target) {
    return new HouseNew(addr)
  }
  this.address = addr;
  console.log('how was i callled in new way : ')
  console.log(new.target);
}
let newH = HouseNew('wakadsaa')
console.log(newH)

let someHouse = new House({city : {name : 'pune', locality : {name : 'wakad', houseno : {value : 'd601'}}}})
console.log(someHouse)
console.log(someHouse.address.city.locality)
console.log(someHouse?.address?.cityss?.locality)

delete someHouse.address.city?.locality.name;
someHouse.hello?.();

let obj5 = new House({city : {name : 'pune', locality : {name : 'wakad', houseno : {value : 'd601'}}}})
let obj6 = new House({city : {name : 'jaipur', locality : {name : 'mahesh nagar', houseno : {value : 'a22'}}}})
console.log(obj5 - obj6)


var obj = {}
obj[true] = 3;
console.log(obj[true])
console.log(obj[1>2])
console.log(obj[1<2])

var id = Symbol('adityaSymbol')
console.log(id)
console.log(Symbol.keyFor(id)) /// only returns value for global symbol

obj[id]='mystery'
console.log(obj)
for(let k in obj){
  console.log(k)
}
console.log(Symbol.for('adityaSymbol'))


//Object to number
var obj = {2:4}
obj[Symbol.toPrimitive] = ()=>6
obj++;
console.log(obj)

let somebignum = 3.4e3;
console.log(somebignum)

//tostring with base
console.log(somebignum.toString(16))
console.log(somebignum.toString(10))


let somename = 'aditya sharma'
console.log(somename.slice(3, 9))
console.log(somename.slice(-5, -2))
console.log(somename.slice(-5))


//upper case first letter
let str='aditya'
str = str.slice(0,1).toUpperCase() + str.slice(1);
console.log(str)


function truncate(str, maxlength) {
  return str.slice(0, maxlength) + '...'
}
console.log(truncate("What I'd like to tell on this topic is:", 20))



//Array --------------------------------------------------------------------------

let arr = ['lets', 'make', 'a', 'random','big', 'arrayy', 'bigger'];
for(let key in arr) {
  console.log(key + ':' + arr[key])
  console.log()
}
console.log('lets use map on arr now')
var maparr = arr.map(val => val.length)
console.log(maparr)
console.log(arr.filter(val => val.length > 4))
arr.push('value at end')
console.log(arr)
console.log(arr.pop())
arr.shift('value at beginning')
console.log(arr)
arr.unshift('lets')
arr.unshift('value at beginning')
console.log(arr)

for (let val of arr) {
  console.log(val)
}

function getMaxSubSum(arr) {
  let sum = 0, maxSum;
  for (let i = 0; i<arr.length; i++) {
    if (sum + arr[i] > 0) {
      sum += arr[i]
    } else {
      maxSum = sum;
      sum = 0;
    }
  }
  console.log('maximum sum is : ' + (maxSum > sum ? maxSum :sum))
}

getMaxSubSum([-1, 2, 3, -9]) //== 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) //== 6
getMaxSubSum([-1, 2, 3, -9, 11]) //== 11
getMaxSubSum([-2, -1, 1, 2]) //== 3
getMaxSubSum([100, -9, 2, -3, 5]) //== 100
getMaxSubSum([1, 2, 3]) //== 6 (take all)
getMaxSubSum([-1, -2, -3]) //0


var superTemp = {name :'asd'}
delete superTemp.name;
console.log(superTemp)


//lets cut
// so splice is like :  splice(start, removeHowMany, inser what) and does everythinh in place
let slicendice = ['lets', 'make', 'a', 'random','big', 'arrayy', 'bigger'];
console.log(slicendice)
slicendice.splice(1,2)
console.log(slicendice)
slicendice.splice(1, 0, 'add', 'few')
console.log(slicendice)
slicendice.splice(1, 2, 'make', 'a')
console.log(slicendice)


//slice : slice(start, end) returns a new array
let clonedSnD = slicendice.slice() // retuens cloned array
console.log(clonedSnD)
slicendice[0] = 'hi'
console.log(slicendice)
console.log(clonedSnD)

//concat
console.log(slicendice.concat([1,2,3], 5, 6, [7, 8]))
slicendice.forEach((v, i, a) => console.log(`value : ${v} at ${i} in ${a}`))

console.log(slicendice.find(val => val =='big'))
console.log(slicendice.findIndex(val => val =='big'))

slicendice.reverse()
console.log(slicendice)
slicendice.reverse()
console.log(slicendice)

console.log(slicendice.reduce((acc, current) => acc + current.length))

console.log(typeof slicendice)
console.log(slicendice instanceof Array)
console.log(slicendice instanceof Object)
console.log(slicendice instanceof String)
console.log(Array.isArray(slicendice))

console.log('few utils like fill, every. some')
console.log(slicendice)
console.log(slicendice.some(val => val.startsWith('ran')))
console.log(slicendice.every(val => val.startsWith('ran')))
slicendice.fill('spam', 2, 5)
console.log(slicendice)


//Translate border-left-width to borderLeftWidth
let cssText = 'border-left-width';
console.log(cssText.split('-').reduce((a, v) => a + v[0].toUpperCase() + v.slice(1)))

//Desc sort
let numarr = [5, 2, 1, -10, 8];
console.log(numarr.sort((v1, v2) => v2 - v1))
console.log(numarr.sort((v1, v2) => v1 - v2))


//Somefancy stuff
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];
console.log(users.map(v => ({
  [v.id] : v
})))
//with reduce
console.log(users.reduce((a, v) => {
  a[v.id] = v; return a
}, {}))









