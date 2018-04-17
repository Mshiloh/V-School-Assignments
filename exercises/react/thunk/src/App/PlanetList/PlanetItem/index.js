import React from "react";

function PlanetItem(props) {
    const {name, diameter, climate} = props;
    console.log(props);
    return (
        <div>
            <h1>{name}</h1>
            <ul>
            <li>Diameter: {diameter}</li>
            <li>Climate: {climate}</li>
            </ul>
        </div>
    )
}

export default PlanetItem;