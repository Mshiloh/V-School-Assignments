import React from "react";

import "./style.css";

import Decks from "../Decks";

function Home(props) {
        const deckStyles = {
                ul: "homeUl",
                li: "homeLi"
        }

        return (
                <div className="homeWrapper">
                        <Decks deckStyles={deckStyles} endpoint="study">
                        </Decks>
                </div>
        )
}

export default Home;
