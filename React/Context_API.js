// It provides a mechanism to pass values down the hierarchy without the need of passing them through each level

const MyContext = React.createContext(defaultValue);
// Creates a Context object
// Any compnent that uses/subscribes to this will use the current value it holds

<MyContext.Provider value={/* some value */}></MyContext.Provider>
// Every Context object comes with a Provider that allows consuming components to subscribe to context changes.

Class.contextType = MyContext 
// OR
static contextType = MyContext;
// The contextType property on a class can be assigned a Context object created by React.createContext()
// *******and in the consuming component use this.context for value**********

MyContext.consumer ???