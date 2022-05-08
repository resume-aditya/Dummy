import React, {useState} from 'react'
import styled from 'styled-components'
const Child1A = ({values, setvalues}) => {
    return (
    <div>
        <input value={values.child1} onChange={e => setvalues({...values, child1 : e.target.value})}/>
    </div>
)}

function Child1({values, setvalues}) {
    const AChild1 = styled.div`
        background-color : orange;
        margin : 15px;
        flex : 1;
        padding: 15px;
    `
  return (
    <AChild1>
        Child1 - Value Entered in below sub component is : <b>{values.child1}</b> 
        <br></br>
        Child2 - Value Entered in side sub component is :<b>{values.child2}</b> 
        <Child1A {...{values, setvalues}}/>
    </AChild1>
  )
}

export default Child1