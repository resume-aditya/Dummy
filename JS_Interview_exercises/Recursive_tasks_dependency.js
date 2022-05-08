/** There is a task object which looks like:

    {
      action : () => {
          return new Promise((res, rej) => {
            setTimeout(() => {
                console.log('Task2 - resolved')
                res()
            },  Math.floor(Math.random() * 5);
        })
      } //returns a promise,
      deps : [task1, task2 etc]
    }

 */
// Rules: 
// 1. Given an input array of tasks, execute all tasks
// 2. If an array of dependency is present, execute all dependencies first recursivley
// 3. Once all dependencies are resolved then only execute original action
// 4. If there is a cyclic dependency, execute only once
// 5. Bonus: Since all these actions are pure functions i.e. not dependent on input, these results can be cached

// Steps:   
      // Iterate over the input array
        // A: if no dependency found trigger action
        // if dependency found, iterate over the dependency array
        // Storea all the promises in an array, once all resolves run the original task
        // Repeat A
      //  For cyclic dependency keep on pushing tasks


