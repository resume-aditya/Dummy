let a, b, rest;
[a, b] = [10, 20];

[a, b, ...rest] = [10, 20, 30, 40, 50];

const { aa, bb } = { aa: 10, bb: 20 }
const { aaa, bbb, ...restt } = { aaa: 10, bbb: 20, ccc: 111, ddd: 222, eee:333 }
// aaa = 10, bbb=20, rest= {ccc:111, ddd: 222, eee: 333}

let person = {
    name: 'aditya',
    age : 123,
    school :'sps',
    others : {
        city : 'jaipur',
        state: 'rajasthan'
    }
}
const {name, age, ...details} = {...person}
// any change to persons -> others will reflect in details