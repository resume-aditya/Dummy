import React,{useReducer, useEffect} from 'react'
import CommentComp from './CommentComp'
import { PostComp } from './PostComp'
import { initialState, reducer } from './store';
import UserComp from './UserComp'

export const DashContext = React.createContext();

function DashComp() {
    const wrapperStyle = {
        display: 'flex',
        padding: 10,
        margin: 10,
        border: "2px solid black"
    }
    const itemStyle = {
        flex: 1,
        padding: 10,
        margin : 10,
        border: "1px solid gray"
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(async () => {
        let p = await fetch("https://jsonplaceholder.typicode.com/users")
        let users = await p.json()
        dispatch({
            type: "USERS",
            payload : users
        })
    
    }, [])
    
  return (
      <DashContext.Provider value={{
          state: state,
          dispatch: dispatch
      }}>
        <div style={wrapperStyle}>
            <UserComp style={itemStyle}></UserComp>
            <PostComp style={itemStyle}></PostComp>
            <CommentComp style={itemStyle}></CommentComp>
        </div>
    </DashContext.Provider>
  )
}

export default DashComp