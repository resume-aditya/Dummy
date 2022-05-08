export default function HOC(WrappedComp) {
  return function (props) {
    return (
      <div style={{position: 'relative'}}>
          <div style={{position: 'absolute', right:10, top:5}}>
              <span>-</span>
              <span>+</span>
          </div>
        <WrappedComp {...props} />
      </div>
    );
  };
}
