import React, {useContext} from 'react'
import styled from 'styled-components'
import {skillContext} from './Creator'

function Child() {
    let ChildDiv = styled.div`
        padding: 15px;
        margin: 15px;
        background-color: lightblue
    `
    const value = useContext(skillContext)
  return (
    <ChildDiv>
        Child
        <div>Skill set : {value.skills}</div>
        <div>Experience : {value.experience}</div>
        
        
    </ChildDiv>
  )
}

export default Child