import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

import MainDecks from "../Decks";

function Manager(props) {
    return (
        <div className="app-wrapper">
            <Link to="/new" className="new">
                <button className="newButt">Create New Deck</button>
            </Link>

            <MainDecks deckWrapperClass="managerDeckWrapper">Manager Decks
            </MainDecks>

            <Link to="/edit" className="edit">
                <button className="editButt">Edit</button>
            </Link>
        </div>
    )
}

export default Manager;