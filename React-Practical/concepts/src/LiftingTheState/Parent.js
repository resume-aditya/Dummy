import React, {useState} from 'react'
import classname from 'classnames'
import "./parent.css";
import Child1 from './Child1';
import Child2 from './Child2';
import styled from 'styled-components'

function Parent() {
    const [hover, sethover] = useState(true)
    let cls = classname({
        outerBorder : true,
        innerPadding : true,
        hover : hover
    })
    const FlexDiv = styled.div`
      display: flex
    `
    const GreyFlexDiv = styled(FlexDiv)`
      background-color: beige;
      padding: 15px;
      margin: 15px;
    `
    const [values, setvalues] = useState({
      child1 : 'Initial Child 1 value',
      child2 : 'Initial Child 2 value'
    })
  return (
    <div className= {cls}>
       <div>Parent</div>
       <GreyFlexDiv style={{'backgroundColor': 'cream'}}>
         <div style={{'flex' : 1}}> Child 1 : <b>{values.child1}</b></div>
         <div style={{'flex' : 1}}> Child 2 : <b>{values.child2}</b></div>
       </GreyFlexDiv>
       <FlexDiv>
          <Child1 {...{values, setvalues}}/>
          <Child2 {...{values, setvalues}} />
       </FlexDiv>
    </div>
  )
}

export default Parent