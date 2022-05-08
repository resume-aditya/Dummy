// Imports:
import {createStore} from 'redux'
import { Provider } from 'react-redux'


// Step 1 : create initial state, reducer and store
        // const reducer = (state = initialState, action ) => {
        // Remember:
            // 1. Switch cases in reducer string
            // 2. Dont forget default case to return state (or errors will come on init load)
            // 3. import { createStore } from "redux"; in store

// Step 2: Add Provider in parent and add store to it:
    // import { Provider } from "react-redux";
    // <Provider store={store}>

// Step3 : Add connect to a comonent with mapStateToProps and mapDispatchToProps
        // Remember dispatch takes object{} with type attribute in argument

        export default connect((state) => {
            return {
                users : state.users,
                isLoading  : state.isLoading
            }
        }, (dispatch) => {
            return {
                fetchUsers : () => {
                    dispatch({type : 'FETCH_USERS'})
                },
                usersReceived : (users) => {
                    dispatch({type : 'USERS_RECEIVED', payload: users})
                }
            }
        })(UserList);