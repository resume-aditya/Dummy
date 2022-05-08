import React, {useContext} from 'react'
import { DashContext } from './DashComp'

const UserComp = (props) => {
    const {state, dispatch} = useContext(DashContext)
  return (
    <div {...props}>
        {state.map(user => <div>{user.name}</div>)}
    </div>
  )
}

export default UserComp