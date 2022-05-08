// CRP is the process or steps or events a browser goes through to convert HTML, CSS, JS into pixels on screen
// Optimizing the critical rendering path improves the time to first render
// Important parts:
        // DOM - Document object model - it is created as HTML is parsed
        // CSSOM- CSS object model - As HTML is parsed it requests CSS which builds CSSOM
        // render tree - Browser combines above 2 to make renderTree
        // Layout - This determines the size and position of everything on the screen
        // Once all is ready Pixels are painted on the screen

// Few words on CSSOM:
    // CSSOM contains the complete style set of the page -> inline, external, head etc
    // DOM construction is incremental, CSSOM is not because a lot of css overriding rules happen
    // CSSOM is hence render blocking. Render halts till all css is resolved

// Few words on Render Tree
    // Once CSSOM and DOM calculation is done. Both are combined to make render tree
    //  DOM is paresed from root and its style is fetched for it
    // render tree is created only for visible elements.
    //  IMPORTANT - Any time the render tree is modified, such as by added nodes, altered content, or updated box model styles on a node, layout occurs.

// Few words on Layout:
    // Once render tree is done layout is initiated.
    // Width and height are calculated
    // Every time device is rotated, layout is done again

//  painting
    // painting the pixels to the screen
    //  Once the entire screen is painted. After that, only impacted areas of the screen will be repainted, as browsers are optimized to repaint the minimum area required

// Steps:
    // Mention Stupidity about DNS resolving
    // 1. A request for a web page or app starts with an HTML request
    // 2. The server returns the HTML - response headers and data
    // 3. Browser then begins parsing the HTML, converting the received bytes to the DOM tree
    // 4. Browser initiates requests every time it finds links to external resources(CSS, JS, Images)
    // 5. Some of above are blocking, meaning render halts
            // - Maybe talk about async defer here
    // 6. Resumes again and cycle goes on till it reaches end of HTML
    // 7. Construct CSSOM
    // 8. With DOM and CSSOM, constructs the render tree
    // 9. Layouting info like poisiton, size etc is done
    // 10. Paint on screen

// Improvement
    // minimizing the number of critical resources by deferring their download
    // marking them as async
    // optimizing the number of requests required along with the file size of each request
    // optimizing the order in which critical resources are loaded by prioritizing the downloading critical assets