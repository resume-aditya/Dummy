// function loadScript (src, callback) {
//     let sc = document.createElement('script')
//     sc.src = src;
//     document.head.append(sc)
//     sc.onload = () => callback()
//     sc.onerror = () => callback (new Error())
// }

// loadScript('thirdParty.js', (e) => {
//     thirdTest()
//     loadScript('thirdParty2.js', (e) => {
//         thirdTestPart2()
//     })
// })
// // this sort of nesting will keep on increasing - pyramid of something
// // rather use promise

// let promise = new Promise(function (resolve, reject) {
//     resolve(2)
// })
// promise.then((val)=>{console.log('I m done :'+ val)})


function loadScriptPromise (src) {
    let p = new Promise(function (resolve, reject) {
        let sc = document.createElement('script')
        sc.src = src;
        document.head.append(sc)
        sc.onload = () => resolve(src)
        sc.onerror = () => reject (new Error())
    })
    return p;
}
loadScriptPromise('thirdParty.js').then(() => {
    console.log('calling from promise resolve')
    thirdTest()
}).then(()=>console.log('i willl break this'))


console.log('**************Promise chaining*****************')
loadScriptPromise('thirdParty.js').then(() => {
    return loadScriptPromise('thirdParty2.js')
}).then(()=>{
    console.log('now both scripts are loaded')
    thirdTest()
    thirdTestPart2()
})

console.log('better way coming')
loadScriptPromise('thirdParty.js').then(() => {
    return loadScriptPromise('thirdParty2.js')
})


///error handling
new Promise ((resolve, reject) => {
    // resolve(5)
    //reject(3)
    throw new Error('some fancy error')
})
.then((result) => {console.log('i passed with result : ' + result)})
.catch((error) => {console.log('some basic handling : ' + error)})
.then((result) => {console.log('i am here becausr thens are chainable : ' + result)})
.catch((error) => {
    console.log('i failed with result : ' + error)
    return new Promise ((resolve, reject) => {
        resolve(15)
    })
}).then((result) => {console.log('can this happen : ' + result)})


let p1 = loadScriptPromise('thirdParty.js');
let p2 = loadScriptPromise('thirdParty2.js');
Promise.all([p1, p2]).then((result)=>{console.log('all is finished now'); console.log(result)})


///Promise util functions
//Promise.all
//Promise.allSettled ----------- may need polyfill
//Promise.race ---- runs then for the first success or failed promie
//Promise.any ----- runs after any promise is success, 
//Promise.resolve
//Promise.reject


//Promisificatio is transforming a function that accepts a callback to a function that returns a promise
function simple(callback) {
    setTimeout(()=>{
        console.log('do some simple task')
        callback()
    })
}
simple(()=>{
    console.log('this happens after simple task is done')
})

//Promisify above
function simplePromise () {
    return new Promise ((a, b) => {
        simple(() => {
            a()
        })
    })
}
simplePromise().then(() => {console.log('woww this worked')})



////// Now to promisify any function

function promisfy (func) {
    return new Promise ((a, b) => {
        func(() => {
            a()
        })
    })
}


async function funky () {
    let prm = new Promise((resolve, reject) => {
        setTimeout (() => {console.log('lets get resolved after 1 second');resolve(1)}, 1000)
    })
    let result = await prm;
    return result;
}
funky()
console.log('directly here')


