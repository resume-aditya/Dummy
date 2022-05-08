import React from 'react'
import styled from 'styled-components'
import HOC from './HOC'


const Panel1 = (props) => (<div style={{flex:1,padding:10, backgroundColor:'pink', margin:10, height:100}}>
    <div>{props.title}</div>
    <div>{props.content}</div>
</div>)
const Panel2 = (props) => (<div style={{flex:1,padding:10, backgroundColor:'orange', margin:10, height:100}}>
    <div>{props.title}</div>
    <div>{props.content}</div>
</div>)

function WrappedComp() {
    const OuterDiv = styled.div`
        background-color: lightblue;
        margin: 15px;
        padding: 15px;
        text-align: center;
        border: 5px solid blue;
        display: flex;
    `
    const ManimizablePanel1 = HOC(Panel1)
    const ManimizablePanel2 = HOC(Panel2)

    return (
        <OuterDiv>
            <ManimizablePanel1 title="Panel 1" content="let's display something"/>
            <ManimizablePanel2 title="Panel 2" content="let's display something too"/>
        </OuterDiv>
    )
}

export default WrappedComp