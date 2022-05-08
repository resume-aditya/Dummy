import React, { useContext } from 'react'
import styled from 'styled-components'
import { PersonaContext } from './Dashboard'

const NodeDiv = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: beige;
`


const Male = (props) => {
    let themeValue = useContext(PersonaContext)
    console.log(themeValue)
  return <div>Male - {props.alias}</div>
}
const Female = (props) => <div>Female - {props.alias}</div>
const Child = (props) => <div>Child - {props.alias}</div>

const WrapperHoc = (Comp) => {
  return (props) => {
    return (<NodeDiv><Comp {...props}/></NodeDiv>);
  }
}

const WrapperMale = WrapperHoc(Male)
const WrapperFemale = WrapperHoc(Female)
const WrapperChild = WrapperHoc(Child)

export {WrapperMale, WrapperFemale, WrapperChild}