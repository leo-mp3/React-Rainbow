import React, { useState } from 'react'
// Make sure to import the component we just built:
import ColorBlock from './ColorBlock.js'

function App(){
    let colors = [
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ]
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color}/>
        )
    })

    return (
        <div className="App">
            {colorMap}
        </div>
    )
}

export default App;
