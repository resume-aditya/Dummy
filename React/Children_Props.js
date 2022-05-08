// Children is a prop (this.props.children) that allow you to pass components as data to other components, just like any other prop you use. 

// Component tree put between component's opening and closing tag will be passed to that component as children prop.

const MyDiv = React.createClass({
    render: function() {
      return <div>{this.props.children}</div>
    }
  })
  
  ReactDOM.render(
    <MyDiv>
      <span>{'Hello'}</span>
      <span>{'World'}</span>
    </MyDiv>,
    node
  )

  // This comes in handy when lets say createing a dialog component, where actual content comes from outside