import React, {useEffect} from "react";
import { connect } from "react-redux";

const style = {
    userWrapper : {
        display : 'flex',
    },
    userChip : {
        padding : 5,
        margin : 5,
        border : '1px solid black'
    }
}

const getBackgroundColor = () => {
    return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
}

function UserTrain(props) {
    useEffect(async () => {
      let p = await fetch('https://jsonplaceholder.typicode.com/users/')
      let res = await p.json();
      props.fetchUsers(res)
    }, [])
    
  return <div style={style.userWrapper}>
      {props.users.map(user => {
          return <div onClick={e => {e.target.style.backgroundColor = getBackgroundColor()}} style={{...style.userChip, backgroundColor: getBackgroundColor()}} key={user.name}> {user.name} </div>
      })}
  </div>;
}

export default connect(
  (state) => {
    return {
      users: state.users,
    };
  },
  (dispatch) => {
    return {
      fetchUsers: (users) => {
        dispatch({
          type: "FETCH_USERS",
          payload: users,
        });
      },
    };
  }
)(UserTrain);
