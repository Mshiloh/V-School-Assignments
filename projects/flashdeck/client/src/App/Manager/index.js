import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import Decks from "../Decks";
// import New from "../New";
// import Edit from "../Edit";

function Manager(props) {
    const deckStyles = {
        ul: "managerUl",
        li: "managerLi"
    }
    return (
        <div className="managerWrapper">

            <Link to="/new" className="new">
                <button className="newButt">Create New Deck</button>
            </Link>
            
                <Decks deckStyles={deckStyles} endpoint="edit"></Decks>

        </div>
    )
}

export default Manager;