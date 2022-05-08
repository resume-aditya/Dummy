// it is a XML like syntax extension to JavaScript
// JSX produces React elements
// JSX is syntactic sugar for React.createElement

<div>Hello World</div>
// is transpiled by babel to 
react.createElement('div', {}, 'Hello World')

// JSX can be treated like a normal variable and can be passed around
// JS expressions can be placed inside JSX by putting them in {}

let name = 'aditya sharma'
{/* <div>Name is : {name}<div> */}

//JSX Prevents Injection Attacks
// By default, React DOM escapes any values embedded in JSX before rendering them.
// This helps prevent XSS 

// Through both JSX and createElement, React elements are constructed like below.
// React uses these element to construct DOM

const element = {
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello, world!'
    }
  }