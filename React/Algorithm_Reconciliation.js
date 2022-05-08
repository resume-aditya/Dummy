// Reconciliation is the originial algorithm used by react for UI render and update

// Steps:
    // 1. React creates a tree of nodes when the UI renders for the very first time, 
    // 2. Each node representing a React element. 
    // 3. This virtual tree (called virtualDOM), a clone of the rendered DOM tree.

    // 4. React then traverses (breadth first) the tree (VDOM), 
    // 5. updating the DOM on which classes or elements needed to be updated, whenever a change is required to be rendered. This is called Reconciliation

    // 6. Essentially, after any UI update, 
    // 7. React compares every node from two trees, and passes on the cumulative changes to the renderer. (Talk about diffing here)


    // IMPORTANT
    // But, before Fiber, 
            // reconciliation and rendering to the DOM weren't separated, 
            // and React couldn't pause its traversal to jump to other renders in between. 
            // This often resulted in lagging inputs and choppy frame rates.

    // In other words, 
            // with reconciliation forced to be without interruption (or "synchronous"), 
            // render changes couldn't be inserted in the middle.
            // This prevented higher-priority changes from being made until the stack was completely cleared.

            
    