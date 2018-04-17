import React from "react";

function Superheros(props) {
    return (
        <div>
            <h2>{props.hero.name}</h2>
            <img src={props.hero.image} alt="hero" onClick={()=>alert(props.hero.catchphrase)}/>
            {/* onClick={()=>props.handleClick(props.hero)}Y */}
        </div>
    )
};

export default Superheros;