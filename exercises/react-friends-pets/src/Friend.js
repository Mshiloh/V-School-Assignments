import React from "react";
import Pet from "./Pet.js";

function Friend(props) {
    console.log(props.human.pets);
    const pets = props.human.pets.map((pet, i) => <Pet key={pet.name + i}pet={pet}></Pet> )
    return (
        <div>
            <h1>Name: {props.human.name}</h1>
            <h2>Age: {props.human.age}</h2>
            <h1>Pets: </h1>
                <ul>
                    {pets}
                </ul>
            <hr className="hrMain2"/>
        </div>
    )
};

export default Friend;