

const task2 = {
    action () {
        return new Promise((res, rej) => {
            setTimeout(() => {
                console.log('Task2 - resolved')
                res()
            }, 3000);
        })
    },
    deps : []
}

const task3 = {
    action () {
        return new Promise((res, rej) => {
            setTimeout(() => {
                console.log('Task3 - resolved')
                res()
            }, 1000);
        })
    },
    deps : []
}

const task1 = {
    action () {
        return new Promise((res, rej) => {
            setTimeout(() => {
                console.log('Task1 - resolved')
                res()
            }, 5000);
        })
    },
    deps : []
}

task1.deps = [task2];
task2.deps = [task1];

let input = [task1, task3]


const executor = async (tasks, path) => {
    for(let task of tasks) {
        if (task.deps.length) {
            if (path && path.indexOf(task) !== -1) continue;
            if (!path) path = [];
            executor(task.deps, [...path, task])
        }
        await task.action()
    }
}
executor(input)