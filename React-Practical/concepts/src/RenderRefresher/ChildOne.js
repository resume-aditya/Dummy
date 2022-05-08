import React from 'react'

export const ChildOne = ({count}) => {
  console.log('rendering child 1')

  return (
    <div>
      <div>ChildOne</div>
      <div>Count from parent one : {count}</div>
    </div>
  )
}