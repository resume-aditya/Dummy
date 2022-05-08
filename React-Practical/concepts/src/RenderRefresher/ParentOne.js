import React, {useState} from 'react'
import { ChildOne } from './ChildOne'
import Puree from './Puree'

export const ParentOne = ({some}) => {
    const [count, setCount] = useState(0)
    const [alisa, setalisa] = useState(some)
    console.log('rendering parent 1')
  return (
    <div>
        <div>ParentOne : Count : {count}</div>
        <div>ParentOne : Alias : {alisa}</div>
        <button onClick={e => setCount(c => c+1)}>Increase Count</button>
        <button onClick={e => setalisa(a => a +'yoyo')}>Change Alias</button>
        <ChildOne/>
        <Puree />
    </div>
  )
}
