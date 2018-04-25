import React from "react";
import { Link } from "react-router-dom";

function CardsItem(props) {
    const { deckId } = props.deckId._id;
    const { question, answer, _id, endpoint } = props;

    return (

        <div className="wrapperQA">
            <div className="containerQ">
                <p>{question}</p>
            </div>
            <div className="containerA">
                <p>{answer}</p>
            </div>
            <form className="answerForm">
                <input className="answerInput" type="text" placeholder="Enter answer..." />
            </form>
            <button>Check</button>
        </div>
    )
}
export default CardsItem;