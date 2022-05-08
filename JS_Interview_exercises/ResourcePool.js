
// Thoughtspot : 


class ResourcePool {

}

function createUsableExpensiveObject() {
	// Just a stub implementation
	// Contains logic to create the object
	// It's implementation is irrelevant to the library
	return Promise.resolve({ foo: 0 | Math.random() * 1000 });
}

function processInputUsingInstance(instance, input){
return Promise.resolve(instance.foo + input);
}

async function appCode(inputs) {
	const maxInstances = 5;
	const pool = new ResourcePool(createUsableExpensiveObject, 
maxInstances);

	inputs.forEach(async (input) => {
		// either creates a new instance from the function passed, or 
// returns one previously created. always returns a promise.
    /* console.log("input returnedValue ", input) */
    const instance = await pool.retrieve();
		const returnedValue = await processInputUsingInstance(instance, input);
// return the instance back to the pool so that it can be used 
// again by future calls to pool.retrieve
		pool.returnResource(instance);
	});

	// The pool should ensure that the creation is done only upto 
// maxInstances times.
	// If the caller has already asked for max resources without returning 
// anything, and then asks for more, retrieve should queue the request 
// and return an incomplete promise.
	// When the caller returns an instance, the queued requests should be 
// resolved.
}

appCode([1, 2, 3, 4, 5, 6, 7,8, 9 ,10]);







// class ResourcePool {
// 	constructor (instanceCreator, maxInstances) {
//  		this._pool = [];
//     this._createPool(instanceCreator, maxInstances);
//   }
//     async retrieve () {
//       return this._pool.pop();
//     }
//     returnResource (instance) {
//       this._pool.push(instance);
//     }
//   _createPool (creator, instance) {
//   	for (let i=0; i<instance; i++) {
//     	this._pool.push(creator());
//     }
    
//   }
// }

// function createUsableExpensiveObject() {
// 	// Just a stub implementation
// 	// Contains logic to create the object
// 	// It's implementation is irrelevant to the library
// 	return Promise.resolve({ foo: 0 | Math.random() * 1000 });
// }

// function processInputUsingInstance(instance, input){
// return Promise.resolve(instance.foo + input);
// }

// async function appCode(inputs) {
// 	const maxInstances = 5;
// 	const pool = new ResourcePool(createUsableExpensiveObject, 
// maxInstances);

// 	inputs.forEach(async (input) => {
// 		// either creates a new instance from the function passed, or 
// // returns one previously created. always returns a promise.
//     /* console.log("input returnedValue ", input) */
//     const instance = await pool.retrieve();
// 		const returnedValue = await processInputUsingInstance(instance, input);
// // return the instance back to the pool so that it can be used 
// // again by future calls to pool.retrieve
// 		pool.returnResource(instance);
// 	});

// 	// The pool should ensure that the creation is done only upto 
// // maxInstances times.
// 	// If the caller has already asked for max resources without returning 
// // anything, and then asks for more, retrieve should queue the request 
// // and return an incomplete promise.
// 	// When the caller returns an instance, the queued requests should be 
// // resolved.
// }

// appCode([1, 2, 3, 4, 5, 6, 7,8, 9 ,10]);













// Solution
// class ResourcePool {
// 	constructor (instanceCreator, maxInstances) {
//  		this._pool = [];
//     this._createPool(instanceCreator, maxInstances);
//   }
//     async retrieve () {
//       let instance = await this.getInstance();
//       return instance;
//     }
//     returnResource (instance) {
//     	console.log('Current pool state : ', this._pool);
//       console.log('retruning this instance : ', instance)
//       this._pool.push(instance);
//     }
//     async getInstance () {
//     	if (this._pool.length){
//       	return Promise.resolve(this._pool.pop())
//       } else {
//       console.log('Waiting on Pool to get a instance')
//       	let instance = await new Promise((res, rej) => {
//         let interval = setInterval(() => {
//         console.log('Still no instance !!')
//         	if(this._pool.length) {
//           	console.log('Instance received, sending it')
//            	clearInterval(interval)
//           	res(this._pool.pop())
//           }      
//         }, 500)
//         })
//         return instance; 
//       	//wait for _pool to again get an instance and then resolve
//       }
//     }
    
//   _createPool (creator, instance) {
//   	for (let i=0; i<instance; i++) {
//     	this._pool.push(creator());
//     }
    
//   }
// }

// function createUsableExpensiveObject() {
// 	// Just a stub implementation
// 	// Contains logic to create the object
// 	// It's implementation is irrelevant to the library
// 	return Promise.resolve({ foo: 0 | Math.random() * 1000 });
// }

// function processInputUsingInstance(instance, input){
// return Promise.resolve(instance.foo + input);
// }

// async function appCode(inputs) {
// 	const maxInstances = 5;
//   console.log('Creating pool')
// 	const pool = new ResourcePool(createUsableExpensiveObject, 
// maxInstances);
// 	console.log('Pool created : ', pool)
// 	inputs.forEach(async (input) => {
// 		// either creates a new instance from the function passed, or 
// // returns one previously created. always returns a promise.
//     /* console.log("input returnedValue ", input) */
    
//     const instance = await pool.retrieve();
//     console.log('instance for : ', input, 'is : ', instance)
// 		const returnedValue = await processInputUsingInstance(instance, input);
// // return the instance back to the pool so that it can be used 
// // again by future calls to pool.retrieve
		
// 		pool.returnResource(instance);
// 	});

// 	// The pool should ensure that the creation is done only upto 
// // maxInstances times.
// 	// If the caller has already asked for max resources without returning 
// // anything, and then asks for more, retrieve should queue the request 
// // and return an incomplete promise.
// 	// When the caller returns an instance, the queued requests should be 
// // resolved.
// }

// appCode([1, 2, 3, 4, 5, 6, 7,8, 9 ,10]);