// Classes may have static members.
// These members aren’t associated with a particular instance of the class.
// They can be accessed through the class constructor object itself
// Static members are also inherited

class MyClass {
    static x = 0;
    static printX() {
      console.log(MyClass.x);
    }
  }
  console.log(MyClass.x);
  MyClass.printX();

//   ***** Important
// TypeScript (and JavaScript) don’t have a construct called static class the same way as, for example, C# does
//   ***** Important

// Unnecessary "static" class
class MyStaticClass {
    static doSomething() {}
  }
   
  // Preferred (alternative 1)
  function doSomething() {}
   
  // Preferred (alternative 2)
  const MyHelperObject = {
    dosomething() {},
  };

//   Static block ???
// Static blocks allow you to write a sequence of statements with their own scope that can access private fields within the containing class.


//Static + Generics
class Box<Type> {
  static defaultValue: Type;
// Static members cannot reference class type parameters.
}