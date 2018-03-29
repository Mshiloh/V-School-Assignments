import React from "react";
import superheroList from "./superheroList.json";
import Superheros from "./Superheros"

function SuperheroEvent() {
    const hero = superheroList.map(heroObj =>
        <Superheros
            key={heroObj.img}
            hero={heroObj}
        />)
    return (
        <div>
            {hero}
        </div>
    )
};

export default SuperheroEvent;