import React from 'react'
import TheColors from "./TheColors.js"

function ColorList(props) {
    console.log(props);
    const { color } = props;
    const colorComponents = color.map((color, i) => <TheColors key={color.hex + i} {...color} />)
    return (
        <div>
            {colorComponents}
        </div>
    )
}

export default ColorList;
