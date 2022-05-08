// A repaint occurs when changes are made to an elements skin that changes visibly, but do not affect its layout.

// Examples of this include outline, visibility, background, or color. 
// repaint is expensive because the browser must verify the visibility of all other nodes in the DOM tree.

// A reflow is even more critical to performance because it involves changes that affect the layout of a portion of the page (or the whole page).

// Examples that cause reflows include: adding or removing content, explicitly or implicitly changing width, height, font-family, font-size and more.


// Reflow Triggers:
        // Resizing the window
        // Changing the font
        // Adding or removing a stylesheet
        // Content changes, such as a user typing text in
        // an input box
        // Activation of CSS pseudo classes such as :hover (in IE the activation of the pseudo class of a sibling)
        // Manipulating the class attribute
        // A script manipulating the DOM
        // Calculating offsetWidth and offsetHeight
        // Setting a property of the style attribute


// Minimize reflow expenses
        // Change classes as low in the dom tree as possible
        // Avoid setting multiple inline styles
        // Avoid tables for layout, use flex
        // Avoid JavaScript expressions in the CSS like calc