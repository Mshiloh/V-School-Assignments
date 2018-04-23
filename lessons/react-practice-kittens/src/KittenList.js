import React from "react";
import kittens from "./kittens.json";
import Kitten from "./Kitten";

function KittenList() {

    function meow() {
        alert(`Hi, I'm ${kitten.name} and I'm ${kitten.age} years old.`)
    }
    const kitten = kittens.map(kittenObj =>
        <Kitten
            key={kittenObj.img}
            kitten={kittenObj}
            handleClick={meow}
        />)
    return (
        <div>
            {kitten}
        </div>
    )
};

export default KittenList;