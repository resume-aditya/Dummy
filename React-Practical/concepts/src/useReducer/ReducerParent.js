import React, { useReducer } from 'react'
import styled from 'styled-components';
import Child from './Child'
import { reducer, intiState } from './Reducer';

function ReducerParent() {
    let ParentDiv = styled.div`
    padding: 15px;
    margin: 15px;
    background-color: lightgreen;
  `;
  const [skillState, skillDispatch] = useReducer(reducer, intiState)
  return (
    <ParentDiv>ReducerParent
        <div>Skillset : {skillState.skills}</div>
        <div>Experience : {skillState.experience}</div>
        <button onClick={(e) => {
            skillDispatch({type:'addSkill', payload: 'python'})
        }}>This changes everything !!</button>
        <button onClick={(e) => {
            skillDispatch({type:'addExperience'})
        }}>You are too old man !!</button>
        <Child />
    </ParentDiv>
  )
}

export default ReducerParent