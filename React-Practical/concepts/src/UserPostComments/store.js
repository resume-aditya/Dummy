const initialState = [{
    user : 'abc',
    posts : [{
        title: 'xyz'
    }]
}]

const reducer = (state, action) => {
    switch (action.type) {
        case "USERS":debugger
            return action.payload
    
        default:
            return state;
    }
}

export {initialState, reducer}