// The never and unknown primitive types were introduced in TypeScript v2.0 and v3.0 respectively
//Any:
    //A variable with type 'any' can be assigned anything
    //  universal supertype of the type system
    // TS compiler will allow any operation on values
    //Above variable can be used without compileerror 
                function invokeAnything(callback: any) {
                    callback(); //No compile time error :(
                }
                invokeAnything(1); // Runtime error here
// Unknown:
    //A variable with type 'unknown' can be assigned anything
    // But when trying to use the unknown variable, TypeScript enforces a type check
    // meaning TS compiler 'won't' allow any operation on values unless type checked
                function invokeAnything(callback: unknown) {
                    callback(); // Compile time error here :)
                `Object is of type 'unknown'`
                }
                invokeAnything(1);
            `-----------------------------------------------------------------`    
                let someVal: unknown;
                let alias : string;
                someVal = 'aditya'; // You can assign anything to unknown
                if (typeof someVal === 'string')  // before assigning or using you have to compulsorily chcek the type. Better than any
                {alias = someVal;}
// Summary:
    // You can assign anything to unknown type but you have to do a type check or type assertion to operate on unknown
    // You can assign anything to any type and you can perform any operation on any

// Never :
    // The never type represents the type of values that never occur.
    function throwErr(msg: string, code: number): never {
        // throw { msg , code, 'something': 23}
        throw new Error(msg + code)
    }
    throwErr('something always break', 302)

    // Function returning never must not have a reachable end point
    function infiniteLoop(): never {
        while (true) {}
    }