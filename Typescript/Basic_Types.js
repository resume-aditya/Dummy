// Core types:
        // string number boolean 'null undefined' void symbols

// Advanced Types:
        // Arrays Enums Interface Classes Tuple

// Quick definition:
        //Void : void is like the opposite of any: the absence of having any type at all. Commonly seen  as the return type of functions that do not return a value:

        //Never:  The never type represents the type of values that never occur
        // Unknown: Like any, but forced type check while using
        //Null, Undefined: 
                // Not much else we can assign to these variables!
                let u: undefined = undefined;
                let n: null = null;
                //But they can be assigned to anything
        //Enum: enum is a way of giving more friendly names to sets of numeric values.  
                enum Color {
                        Red,
                        Green,
                        Blue,
                }
                let c: Color = Color.Green;
        // Array: 
        let list: number[] = [1, 2, 3];
        let list: Array<number> = [1, 2, 3];