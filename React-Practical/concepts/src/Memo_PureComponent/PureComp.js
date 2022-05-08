import React, { PureComponent, Component, useState } from 'react'


class Child extends PureComponent {
    constructor() {
        super()
        this.state = {
            value: Math.random()
        }
    }
    // shouldComponentUpdate () {
    //     return false;
    // }
  render() {
      console.log('child renderings')
    return (
        <div>
            <div>{this.state.value}</div>
            <div>Child</div>
        </div>
    )
  }
}


const PureComp = () => {
    const [first, setfirst] = useState(Math.random())
    console.log('Parent rendering')
    const some = {a: 1}
    return (
        <>
            <button onClick={(e) => setfirst(Math.random())}>Change state</button>
            <div>{first}</div>
            <Child x={some}/>
        </>
    )
}

export default PureComp;