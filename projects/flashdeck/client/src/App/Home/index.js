import React from "react";

import "./style.css";

import Decks from "../Decks";

function Home(props) {
        const deckStyles = {
                ul: "homeUl",
                li: "homeLi"
        }
        return (
                <div>
                        {/* Render a list of links to the game-deck page */}
                                <Decks deckStyles={deckStyles} endpoint="study">
                                </Decks>

                        {/* <Route path="/study/:id" component={Study}></Route> */}
                </div>
        )
}

export default Home;
