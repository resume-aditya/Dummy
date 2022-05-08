// Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, 
// log those errors, 
// and display a fallback UI instead of the component tree that crashed


/** VEry very Imp
 *  For checking your ErrorBoundary, throw an error from a reachable section in the component tree which is not:

    Event handlers
    Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
    Server side rendering
    Errors thrown in the error boundary itself (rather than its children)
 */


// A class component becomes an error boundary if it defines either (or both)
        // static getDerivedStateFromError() 
        // or componentDidCatch()



        class ErrorBoundary extends React.Component {
            constructor(props) {
              super(props);
              this.state = { hasError: false };
            }
          
            static getDerivedStateFromError(error) {
              // Update state so the next render will show the fallback UI.
              return { hasError: true };
            }
          
            render() {
              if (this.state.hasError) {
                // You can render any custom fallback UI
                return <h1>Something went wrong.</h1>;
              }
          
              return this.props.children;
            }
          }