import React, {useState} from 'react'
import styled from 'styled-components'
const Child2A = ({values, setvalues}) => {
    return (
    <div>
        <input value={values.child2} onChange={e => setvalues({...values, child2: e.target.value})}/>
    </div>
)}

function Child2({values, setvalues}) {
    const AChild2 = styled.div`
        background-color : aqua;
        margin : 15px;
        flex : 1;
        padding: 15px;
  `
  return (
    <AChild2>
            Child2 - Value Entered in below sub component is : <b>{values.child2}</b> 
            <br></br>
            Child1 - Value Entered in side sub component is :<b>{values.child1}</b> 
        <Child2A {...{values, setvalues}}/>
    </AChild2>
  )
}

export default Child2