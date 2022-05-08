console.log('lets study classes')

class SolarSystem {
    constructor (centered) {
        this.centered = centered;
        this.planets = [];
    }
    addPlanets (planetName) {
        this.planets.push(planetName);
    }
    describeSystem () {
        console.log(`This system's center is ${this.centered} and has ${this.planets.length} planets`)
    }
}
let ss = new SolarSystem('Sun')
ss.addPlanets('mercury')
ss.addPlanets('venus')
ss.addPlanets('earth')
ss.describeSystem()
//SolarSystem()  this error happens since class syntax assign [[IsClassConstructor]]: true
// Also all methods are by default enumerable

class StarwarsSystem extends SolarSystem {
    constructor () {
        super()
        this.habitant = 'jedi'
    }
    describeSystem () {
        console.log(`This star wars center is ${this.centered} and has ${this.planets.length} planets`)
    }
}
let swS = new StarwarsSystem('nebula')
swS.describeSystem()


///// try catch
let a;
try {
    a = a. hi
    console.log('some code here')
}
catch (e) {
    console.log('your application broke at : ' + e)
}
console.log('i am here')

try {
    setTimeout(()=>{
        try {
            a = a. hi;
        }
        catch (e) {
            console.log('your inner timeout application broke at : ' + e)
        }
    })
    console.log('some timeout code here')
}
catch (e) {
    console.log('your timeout application broke at : ' + e)
}
console.log('i am after timeout here')

class InfniteWorldsError extends Error { 
    constructor (message) {
        super(message)
        this.name = 'InfniteWorldsError'
        }
    }

try {
    let b = 1/0;
    if (b == Infinity) {
        console.log('avengers infinity')
        throw new InfniteWorldsError('looks like we need to get the timestone')
    }
}
catch (e) {
    console.log('your infinity application broke at : ' + e )
}
