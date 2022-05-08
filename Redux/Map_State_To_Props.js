export default connect((state)=>{
    return {
        users : state.users
    }
}, (dispatch) => {
    return {
        getUsers : () =>  dispatch(async (dispatch) => {
            let resp = await fetch('https://api.github.com/users')
            let users = await resp.json()
            dispatch({
                type : 'FETCH_USERS',
                users
            })

        })
    }
}