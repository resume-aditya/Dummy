//Smaple class
class Point {
    x: number;
    y: number;
  }

//Readonly
class Greeter {
  readonly name: string = "world";
  err(msg: string): void {
    this.name = "not ok";//Cannot assign to 'name' because it is a read-only property.
  }}

//Constructor Overload
class Point {
    // Overloads
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any) {
      // TBD
    }
  }

//Super must be the first line of constructor in case of inheritance (before accessing 'this')
