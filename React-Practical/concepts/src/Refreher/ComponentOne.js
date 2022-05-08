import React, { useState } from "react"
const One = () => {
    console.log('In render one')
    let [first, setFirst] = useState(1)
    return (
        <div>
            <button onClick={(e) => {setFirst(++first)}}>Change state</button>
            <div>One : {first}</div>
            {/* <Two /> */}
            {/* <Three /> */}
        </div>
    )
}

const Two = () => {
    console.log('In render two')
    return (
        <h1>Two</h1>
    )
}

const Three = React.memo(Two)


export default One