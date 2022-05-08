// // Promise Usage
// let P1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('I resolved it')
//         rej('I rejected it')
//     }, 2000);
// })

// P1
// .then(data => console.log(data))
// .catch(data => console.log(data))
// .finally(data => console.log('here in finally'))

function CustomPromise (executor) {
    const STATES = {
        PENDING : 'pending',
        RESOLVED : 'resolved',
        REJECTED : 'rejected'
    }
    this.state = STATES.PENDING;
    this.successCallback = [];
    this.failCallback = [];
    const resolve = (data) => {
        while(this.successCallback.length > 0) {
            let callback = this.successCallback.shift();
            callback(data)
        }
        this.state = STATES.RESOLVED;
    }
    const reject = (data) => {
        while(this.failCallback.length > 0) {
            let callback = this.failCallback.shift();
            callback(data)
        }
        this.state = STATES.REJECTED;
    }
    return executor(resolve.bind(this), reject.bind(this))
}
CustomPromise.prototype.then = function (callback) { 
    this.successCallback.push(callback);
    return this;
}
CustomPromise.prototype.catch = function (callback) {
    this.failCallback.push(callback);
    return this;
}

CustomPromise.prototype.getState = function () {
    return this.state;
}

let c1 = new CustomPromise(function (res, rej) {
    setTimeout(() => {
        res('I resolved it using custom')
    }, 2000);
})
console.log(c1.getState())

c1.then((data) => {
    console.log(data)
}).catch((data) => {
    console.log(data)
}).then(() => console.log('here I am '))

setTimeout(() => {
    console.log(c1.getState())
}, 4000);
