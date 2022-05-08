// VDOM is an JS Object which is a representation of the DOM object
        // This representation of UI is kept in memory and synced with the "real" DOM.
        // It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.
// Extemely fast compared to DOM
// Can produce 200K virtual dom nodes per second
// Created from scratch on every setstate and dispatch

// There are always 2 doms. When something update React creates a new VDOM . We already have an old vdom present
// These 2 doms are compared using Diffing Algorithm


// Diffing Algorithm
        // **** React traverses BREADTH FIRST *****
        // If a node is different, it ignores the changes and renders an entirely new sub tree
        // Basically it ensures that node isn't added to the update list if there is a change in the parent
        // 1. Two elements of different types will produce different tree
        // 2. Developers can hint which child element is stable across different renders with "key" attribute
        // 3. When comparing two react dom elements of the same type, 
                // a. Keeps the same underlying node
                // b. only updates the changed attribute (same with style) 
        // Normal diff algos are O(n cube)
        // React does in O(n)


    // HOW REACT UPDATES THE BROWSER DOM
        // 1. Post update new VDOM is created
        // 2. React compares it with old VDOM using Diffing Algo
        // 3. Creates a list of changes to be done on Browser DOM
        // 4. Once list is ready it fires of all changes oen after another
        // 5. this is done in a single cycle without reflow
        // 6. Reflow is done in the end

// Optimization : 
    // ShouldComponentUpdate