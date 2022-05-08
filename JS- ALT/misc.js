import {thirdTest} from './thirdparty.js';
function* someGenerator () {
    let i = 1;
    while (i < 5) {
        yield i++;
    }
    return i;
}
let g = someGenerator(), loop;
do {
    let obj = g.next();
    loop = obj.done;
    console.log('the next value is : ' + obj.value)
} while (!loop)
let h = someGenerator()
for (let i of h) {
    console.log('direclty accessing : ' + i)
}

//module loader eg : require js, commonjs, umd ??
thirdTest()