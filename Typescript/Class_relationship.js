// classes in TypeScript are compared structurally, the same as other types.

class Point1 {
    x = 0;
    y = 0;
  }
  class Point2 {
    x = 0;
    y = 0;
  }
  const p: Point1 = new Point2(); // a bit starnge, but ALL OK, 


  // Similarly, subtype relationships between classes exist even if there’s no explicit inheritance:

  class Person {
    name: string;
    age: number;
  }
   
  class Employee {
    name: string;
    age: number;
    salary: number;
  }
   
  // OK
  const p: Person = new Employee();
