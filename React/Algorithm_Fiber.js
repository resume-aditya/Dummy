// Original algorithm for rendering and updating : React Conciler / ReConciliation

// React Fiber is a backwards compatible, complete rewrite of the React core
// Introduced in React 16
// Fiber Reconciler is the new reconciliation algorithm in React.

// What is a fiber?
//  'fiber' - a representation of a node of the DOM tree.
// A fiber is a JavaScript object, a unit of work. It represents a node of the DOM tree, or a React element, and contains data about a component, its I/P and O/P.

// Advantages :
    // 1. Improved performance -  break the limits of the call stack.This lets it pause or start rendering work whenever required
    // 2. Control over the "priority" of work : 
                // Through its feature of incremental rendering, 
                // React Fiber lets developers split rendering work into smaller chunks and distribute it over multiple frames. 
    // 3. More fluid experience : 
                // So by breaking up the work into smaller chunks 
                // that can be paused, resumed, or aborted based on a set priority order, 
                // React Fiber helps apps deliver a more fluid experience.
  
// What are the features of React Fiber?
    // Supporting better error handling and recovering from errors
    // Rendering subtrees into DOM node containers
    // Returning multiple elements from a render function

// Internal Woerking : 
        // Fiber allows the reconciliation and rendering to the DOM to be split into two separate phases:
        // Phase 1: Reconciliation
                // In the first phase, React creates a list of all changes to be rendered in the UI 
                // an 'effect list', comprising of new and updated components
                // Once the list is fully computed, React will schedule these changes to be executed in the next phase
                // Note that React doesn't make any actual changes in this phase.
        // Phase 2: Commit
                // React tells the DOM to render the effect list that was created in the previous phase.
                // While the Reconciliation phase can be interrupted, the Commit phase cannot.


// Summary : 
    // So via Fiber, React is able to traverse the component tree through 
    // a singly linked list tree traversal algorithm. 
    // ********* This algorithm can run in an "asynchronous" manner - allowing React to pause and resume work at particular nodes. **********
