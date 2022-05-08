// Case 1: add(1)(2)(3)
// Case 2: add(1)(2)(3)…(n)()
// Case 3: sum(1,2)(3,4)
// Case 3: sum(1,2)(3,4)(5,6)()
// Case 4: add(1,2..n)(5,6…n)…(n)()


const add = (a, b) => a+b;

const curriedAdd = (a) => (b) => a+b;

console.log(curriedAdd(2)(3))

 function curriedAddNth(a) {
        return function(b) {
            if (b) 
                return curriedAddNth(a + b)
            else
                return a;
        }
}

console.log(curriedAddNth(2)(3)(4)(5)())


function curriedPairs(a, b) {
   return function (c, d) {
       return a+b+c+d;
    }
}
console.log(curriedPairs(2,3)(4,5))


function curriedPairsNth (a,b) {
    return function(c, d) {
        if (c&&d) {
            return curriedPairsNth(a+b, c+d)
        } else {
            return a+b;
        }
    }
}

console.log(curriedPairsNth(2,3)(4,5)(6,7)(8,9)())


function curriedSumCrazy (...args) {
    let outerSum = args.reduce((a, b) => a+b, 0);
    return function (...argsInner) {
        if (argsInner.length) {
            let innerSum = argsInner.reduce((a, b) => a+b, 0);
            return curriedSumCrazy(outerSum, innerSum)
        } else {
            return args[0] + args[1]
        }
    }
}

console.log(curriedSumCrazy(1,2,3)(4,5)(1,6,7)(8,9,13,11,15)()) //85
console.log(curriedSumCrazy(1,2)()) //3
