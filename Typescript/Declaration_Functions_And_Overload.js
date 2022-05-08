function add (num1: number, num2: number): number {
   return num1 + num2;
}

//Override
// Function Override
class Base {
    greet() { console.log("Hello, world!"); }
  }
   
  class Derived extends Base {
    greet(name?: string) { // This optional is very important
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


