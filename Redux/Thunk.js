// Thunk is a middleware for Redux

// Usually in a dispatch method, an object containing type and payload is passed

// Thunk allows us to pass a function

// It allows writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.

function fetchuser () {
    return function (dispatch) {
        // write complex logic here and dispatch
    }
}

store.dispatch(fetchuser())

//usually without thunk or any async middleware it is:
        store.dispatch({type:"doThis1", payload: 'sfdf'})
        const store = createStore(reducer, applyMiddleware(thunk))


        // Example

        export default connect(
            (state) => {
              return {
                users: state.users,
                isLoading: state.isLoading,
              };
            },
            (dispatch) => {
              return {
                fetchUsers: () => {
                  dispatch({ type: "SET_LOADING"});debugger
                  dispatch(async (dispatch, getState) => {debugger
                      let promise = await fetch("https://api.github.com/users");
                      let users = await promise.json();
                      dispatch({ type : 'USERS_RECEIVED', payload : users})
                  })
                },
              };
            }
          )(UserList);