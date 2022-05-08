// list all key value pairs in a nested object

const a = {
    b: 2,
    c: 3,
    d : {
        e: 4,
        f: {
            g: 5,
            h: 6,
            i : {
                j : 7
            }
        }
    }
}

function printKV(obj) {
    for (let k in obj) {
        if (typeof obj[k] === 'object') {
            printKV(obj[k])
        } else{
            console.log(obj[k])
        }
    }
}
printKV(a)