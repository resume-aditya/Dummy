import {createStore} from 'redux'

const initalState = {age: 12}
const reducer = (state = initalState, action) => {
    return {...state, age : state.age + 1}
}
const teststore = createStore(reducer)
export default teststore