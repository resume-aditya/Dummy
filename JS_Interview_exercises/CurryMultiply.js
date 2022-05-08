//1. multiply(2, 3)
//1. multiply(2)(3)
//1. multiply(2)(3)(4)(5)()
//1. multiply(2*3)(3*4*5)(6)(7)()

const multiply = (a,b) => a*b;
console.log(multiply(2,3))

const multiplyCurried = a => b => a*b;
console.log(multiplyCurried(2)(4))


const mulitplyUnlimited = a => b => b !== undefined ? mulitplyUnlimited(a*b) : a;
console.log(mulitplyUnlimited(1)(2)(3)(4)(0)())