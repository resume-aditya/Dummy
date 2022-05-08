import react, {useEffect, useState} from "react";
import { connect } from "react-redux";

function UserList (props) {

    useEffect(async () => {
      const p = await fetch('https://jsonplaceholder.typicode.com/users/');
      const resp = await p.json()
      props.userReceived(resp)
    }, [])
    

    const [filterName, setfilterName] = useState('')

    return (
        <div className="sections">
            <div>
                <input placeholder="Filter users" value={filterName} onChange={(e) => setfilterName(e.target.value)}/>
            </div>
            <div>{filterName}</div>
            <div>
                {props.users.map(user => {
                    return (
                        <div>
                            <span>{user.name}</span> - <span>{user.email}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        users : state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userReceived : (payload) => {
            dispatch({
            type : 'FETCH_USERS', 
            payload : payload
        })
    }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);