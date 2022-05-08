// Create a function which takes promise name as param and  returns a promise
// Function should resolve that promise in some random seconds between 1-3 seconds
// Function resolves with promise name

// Call this function 5 times 

function createPromise (name) {
    let time = Math.random()*5;
    return new Promise(res => {
        setTimeout(() => {
            res([name, time])
        }, time);
    })
}

function runAtWill() {
    for (let i =0; i<5; i++) {
        createPromise('Promise - '+i).then(console.log)
    }
}

function runInSeriesWithRecursion(index) {
    if(index > 5) return;
    createPromise('Promise - '+ index).then(([data, t]) => {
        console.log(data, 'resolving in  : ', t, 'seconds');
        runInSeries(index+1)
    })
}

// runAtWill()
console.log('-----------------')
// runInSeriesWithRecursion(1)

async function runInSeries() {
    for(let i=0; i<5; i++) {
        await createPromise('Promise - '+ i).then(console.log)
    }
}
runInSeries()
