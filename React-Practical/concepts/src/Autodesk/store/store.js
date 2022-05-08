import { createStore } from "redux";

let initalState = {
  users: [],
  post: [],
  comments: [],
};

function reducer(state = initalState, action) {
    switch (action.type) {
        case 'FETCH_USERS':
            return {...state, users: action.payload}
        case 'FETCH_POSTS':
            return {...state, posts: action.payload}
        case 'FETCH_COMMENTS':
            return {...state, comments: action.payload}
        default:
            return {...state};
    }
}

const store = createStore(reducer)
export default store;
