import React from "react";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import "./style.css";

import Decks from "../Decks";
// import Cards from "../Cards";
import New from "../New";
import Edit from "../Edit";

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
            
            {/* <Link to="/edit" className="edit"> */}
                <Decks deckStyles={deckStyles} endpoint="edit"></Decks>
            {/* </Link> */}

            <Switch>
                <Route path="/new" component={New}></Route>
                <Route path="/edit" component={Edit}></Route>
            </Switch>
            {/* <Cards></Cards> */}
        </div>
    )
}

export default Manager;