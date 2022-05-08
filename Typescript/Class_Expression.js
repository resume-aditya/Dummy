//Class expressions are very similar to class declarations.
// The only real difference is that class expressions don’t need a name
const someClass = class<Type> {
    content: Type;
    constructor(value: Type) {
      this.content = value;
    }
  };
   
  const m = new someClass("Hello, world");