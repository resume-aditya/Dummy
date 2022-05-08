// Interfaces Definition : 
// an interface describes the objects

//Example 1

interface Person {
    firstName: string;
    lastName: string;
  }
  function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
  }
  let user = { firstName: "Jane", lastName: "User" };
  document.body.textContent = greeter(user);


//Example 2 of Interface with Implements

interface Pingable {
    ping(): void;
}
class Sonar implements Pingable {
    ping() { console.log("ping!");}
}
class Ball implements Pingable {
//Error : Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
    pong() { TBD }
}
