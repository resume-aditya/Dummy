let myArray: string[] = ["hello", "world"];
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

function doSomething(value: Array<string>) {}  

//Readonly array
new ReadonlyArray("red", "green", "blue");

//Multi type array
let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana'];