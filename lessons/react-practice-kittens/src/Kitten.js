import React from "react";

function Kitten(props) {
    return (
        <div>
            <h2 onClick={()=>props.handleClick(props.kitten)}> {props.kitten.name } </h2>
            <p>Age: {props.kitten.age}</p>
            <img style={{ maxWidth: "300px" }} src="{props.kitten.img}" alt=""/>
        </div>
    )
};

export default Kitten;