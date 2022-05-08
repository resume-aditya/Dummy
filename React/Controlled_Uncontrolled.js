// Definition
    // Controlled : 
        // A component that controls the input elements within the forms on subsequent user input is called Controlled Component
        // The react state is a single source of truth

    // Uncontrolled 
        // the component that store their own state internally, 
        // and you query the DOM using a ref to find its current value when you need it.
        // This is a bit more like traditional HTML
    

// The react component that renders a form also controls its value on user input

// Controlled
let [inputValue, setInputValue] = useState('')

<input value={inputValue} onChange= e=> setInputValue(e.target.value) />