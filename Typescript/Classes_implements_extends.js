//Implements :
interface Pingable {
    ping(): void;
}
class Sonar implements Pingable {
    ping() {      console.log("ping!");}
}
class Ball implements Pingable {
//Error : Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
    pong() { TBD }
}

// Extends
class Animal {
    move() { console.log("Moving along!");}
}
class Dog extends Animal {
    woof(times: number) { TBD }
  }
const d = new Dog();
d.move();  // Base class method
d.woof(3);// Derived class method

// Function Override
class Base {
    greet() { console.log("Hello, world!"); }
  }
   
  class Derived extends Base {
    greet(name?: string) {
      if (name === undefined) {
        super.greet();
      } else {
        console.log(`Hello, ${name.toUpperCase()}`);
      }
    }
  }
  const d = new Derived();
  d.greet();
  d.greet("reader");

  //Another Extend example
  class MsgError extends Error {
    constructor(m: string) {
      super(m);
    }
    sayHello() {
      return "hello " + this.message;
    }
  }