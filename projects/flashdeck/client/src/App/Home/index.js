import React from "react";

import { Link } from "react-router-dom";

import "./style.css";

import MainDecks from "../Decks";

function Home(props) {

    return (
            <div className="homeDeckList">
                    <MainDecks> Home Decks
                    </MainDecks>
            </div>
    )
}

export default Home;
