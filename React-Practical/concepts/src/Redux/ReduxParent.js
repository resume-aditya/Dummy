import React from 'react'
import styled from 'styled-components';
import teststore from './Store';
import { Provider } from 'react-redux'
import ReduxChild from './ReduxChild';

function ReduxParent() {
    let ParentDiv = styled.div`
    padding: 15px;
    margin: 15px;
    background-color: teal;
    border-radius: 50px;
  `;
  return (
      <Provider store={teststore}>
          <ParentDiv>ReduxParent
              <ReduxChild />
          </ParentDiv>
      </Provider>
  )
}



export default ReduxParent