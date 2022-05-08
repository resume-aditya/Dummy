// An abstract method or abstract field is one 'whose implementation is not provided'. 
// These members must exist inside an abstract class
// Abstrct class cannot be directly instantiated.
// The use of abstract classes is to act as a base class for subclasses which do implement all the abstract members
// When a class doesn’t have any abstract members, it is said to be concrete

abstract class Base {
    abstract getName(): string;
   
    printName() {
      console.log("Hello, " + this.getName());
    }
  }
   
  const b = new Base();
// Error :   Cannot create an instance of an abstract class.

class Derived extends Base {
    getName() {
      return "world";
    }
  }
  const d = new Derived();
  d.printName();

  `---------------------------------------`
  //f we forget to implement the base class’s abstract members, we’ll get an error
  class Derived extends Base {
    // Error : Non-abstract class 'Derived' does not implement inherited abstract member 'getName' from class 'Base'.
    }