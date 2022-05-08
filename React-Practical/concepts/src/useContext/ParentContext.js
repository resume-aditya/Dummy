import React, {useRef, useState, useEffect} from "react";
import styled from "styled-components";
import Child from "./Child";
import {skillContext, initialSkillObject} from "./Creator";

function ParentContext() {
  let ParentDiv = styled.div`
    padding: 15px;
    margin: 15px;
    background-color: lightgreen;
  `;
  const [experience, setexperience] = useState('')
  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.focus();
    initialSkillObject.experience += ' ' + experience
  })
  
  return (
    <skillContext.Provider value={initialSkillObject}>
      <ParentDiv>
        ParentContext
        <div>Change skill : <input ref={inputRef} value={experience} onChange={e => setexperience(e.target.value)}/></div>
        <Child />
      </ParentDiv>
    </skillContext.Provider>
  );
}

export default ParentContext;
