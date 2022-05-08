// State of the whole application is stored in an object tree within a single store

// The only way to change the state is emit an action (object descrining what happened). Not by directly manipulating state

// To specifiy how state is transformed by action/ write pure reducer function. Instead of updating or mutating, should return a new state

// Important Functions
redux.createStore
redux.combineReducer
redux.applyMiddelware

store.getState
store.subscribe
store.dispatch


// Redux library provide createStore

const createStore = redux.createStore

let initalState = {age: 12}
let reducer = (state=initalState, action) => { return state;}

const appStore = createStore(reducer)

appStore.getState()
appStore.subscribe(() => {})
appStore.dispatch({type:'xyz', payload})


// Multiple reducer
const reducer1 = (state) => state
const reducer2 = (state) => state
const finalReducers = redux.combineReducer({rdx1 : reducer1, rdx2: reducer2})
const appStore1 = createStore(finalReducers)