// Generics is being able to create a component that can work over a variety of types rather than a single one
// When a generic class is instantiated with new, its type parameters are inferred
// Classes and interfaces, can be generic. 

//Function 
function addEvent<Type>(event:Type): Type {
return //Some event Object of type Type
}
addEvent<MouseEvent>(evt)
addEvent<ScrollEvent>(evt)

class Box<Type> {
    contents: Type;
    constructor(value: Type) {
      this.contents = value;
    }
  }
   
  const b = new Box("hello!");