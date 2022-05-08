import {createStore} from 'redux'
const initialState = {
    users : [],
    posts : []
}

const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case "FETCH_USERS":debugger
            return {...state, users : action.payload}    
        case "FETCH_POSTS": 
            return {...state}    
        default:
            return {...state}
    }
}

let store = createStore(reducer)
export default store

