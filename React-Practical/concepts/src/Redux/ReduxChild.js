import React from 'react'
import { connect, Provider } from 'react-redux'

function ReduxChild(props) {
    debugger
  return (
    <div>ReduxChild
        Ages is  : {props.counter}
    </div>
  )
}
const mapStateToProps = state => {
    return {
       counter : state.age
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increaseAge : dispatch({type : 'increaseAge'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxChild)