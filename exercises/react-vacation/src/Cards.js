import React from "react";
// import Color from "./Color.js";

// function colors() {

// }

function Cards(props) {
    if (props.spot.timeToGo === "Spring") {
        return <div><h1>Location: {props.spot.place}</h1><h2>Price:<br /> $ {props.spot.price}</h2><h2>Season: <h2 className="season spring"> {props.spot.timeToGo}</h2></h2><br /><hr /></div>

    } else if (props.spot.timeToGo === "Summer") {
        return <div><h1>Location: {props.spot.place}</h1><h2>Price:<br /> $ {props.spot.price}</h2><h2>Season: <h2 className="season summer"> {props.spot.timeToGo}</h2></h2><br /><hr /></div>
    } else if (props.spot.timeToGo === "Fall") {
        return <div><h1>Location: {props.spot.place}</h1><h2>Price:<br /> $ {props.spot.price}</h2><h2>Season: <h2 className="season fall"> {props.spot.timeToGo}</h2></h2><br /><hr /></div>
    } else if (props.spot.timeToGo === "Winter") {
        return <div><h1>Location: {props.spot.place}</h1><h2>Price:<br /> $ {props.spot.price}</h2><h2>Season: <h2 className="season winter"> {props.spot.timeToGo}</h2></h2><br /><hr /></div>
    }
    return (
        <div>
            <h1>Location: {props.spot.place}</h1>
            <h2>Price: $ {props.spot.price}</h2>
            <h2>Season: {props.spot.timeToGo}</h2>
        </div>
    )

};

export default Cards;