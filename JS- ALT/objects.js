//'use strict'
console.log('lets dissect object')
// objects have properties, which are also called keys, these props have values, besides value a prop has other attributes too like
// writable, enumerable, configurable
// writable = false properties values once written can not be reassigned
// enumerable = false properties doesn't appear inside for in`  or other loops
// configurable = false , properties cannot be deleted or these props can not be changed

function show (prop) {
    console.log(lifeObject);
    console.log(Object.getOwnPropertyDescriptor(lifeObject, prop)) 
}
let lifeObject = {
    name : 'aditya',
    age : 33,
    toString () {
        return `${this.name}'s age is ${this.age}`
    }
}
show('name')
Object.defineProperty(lifeObject, 'hobbies', {
    value : 'nothing',
    configurable : false
})
//because we are defining props ourselves, now other options becomes false by default
lifeObject.hobbies = 'skydiving' // this will give error in case of use strict on
show('hobbies')
console.log(lifeObject + '')
console.log(Object.keys(lifeObject))
Object.defineProperty(lifeObject, 'age', {
    enumerable : false
})
console.log(Object.keys(lifeObject))
console.log(lifeObject + '')
delete lifeObject.hobbies;
show('hobbies')

//If you want to create a super constant that cannot be ever changed, like distance between moon and earth
Object.defineProperty(lifeObject, 'moonEarth', {
    writable : false,
    configurable : false,
    value : 10000
});
show('moonEarth')
lifeObject.moonEarth = 99999
show('moonEarth')
delete lifeObject.moonEarth
show('moonEarth')
delete lifeObject;
show('moonEarth')
// Object.defineProperty(Window, 'lifeObject', {
//     configurable : false,
//     writable : false
// });
// lifeObject = null;
// show('moonEarth')


//above work for indiviual props, following work at object level and change all props
Object.seal() // all props to configurable false, meaning props cannot be deleted and their descriptors cannot be changes
Object.freeze()// all props to configurable false and writable false for existing, meaning props cannot be deleted and their descriptors cannot be changes
//No more new props cannot be added/removed anymore
Object.preventExtensions()//No new props can be added


//////////////Accessors and getter setter

lifeObject = {
    name : 'aditya',
    age : 33,
    get hobbies () {
        return this._hobbies || 'nothingss'
    },
    set hobbies (val) {
        this._hobbies = val
    }
}
console.log(lifeObject.hobbies)
lifeObject.hobbies = 'skydive';
console.log(lifeObject.hobbies)

///////////////////////////////////////////////////  Prototype ////////////////////////////////////////

let celstialBody = {
    size : 5,
    rotate () { console.log('rotating')},
    revolve () { console.log('revolve')},
}
let planet = {size : 3};
planet.__proto__ = celstialBody;

let moon = {size : 2};
planet.__proto__ = celstialBody;

console.log(planet)
console.log(moon)

planet.revolve()


///////////////////////////////// Inheritbance //////////////////////////////////////////
function celestial () {
    this.size = 5;
    this.namee = 'celeste'
    this.rotateHrs = 10
    this.isSpace = true
}
celestial.prototype.rotate = function () { console.log('rotating in ' + this.rotateHrs)}

function planetExo (namee, rotateHrs) {
    celestial.call(this)
    this.namee = namee;
    this.rotateHrs = rotateHrs;
    this.size = 3;
}
planetExo.prototype = celestial.prototype;
planetExo.prototype.constructor = planetExo;

let earth = new planetExo('earth', 24)
let mercury = new planetExo('mercury')
console.log(earth)
console.log(mercury)

