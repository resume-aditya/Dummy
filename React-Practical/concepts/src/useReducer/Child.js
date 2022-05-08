import React from 'react'
import styled from 'styled-components';

function Child() {
    let ChildtDiv = styled.div`
    padding: 15px;
    margin: 15px;
    background-color: lightblue;
  `;
  return (
    <ChildtDiv>Child</ChildtDiv>
  )
}

export default Child