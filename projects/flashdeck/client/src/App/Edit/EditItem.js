import React, { Component } from 'react'

import { editDeck } from "../../redux/decks.js";

export default class EditItem extends Component {
    constructor(props) {
        super(props);
        this.setState = {
            title: this.props.title,
            question: this.props.question,
            answer: this.props.answer
        }
        // this.handleChange = this.handleChange.bind(this);
    }

    /*
    handleChange(event) {
        event.preventDefault;

    }
    */
    render() {
        const { title } = this.props.deckId;
        // const onSubmit = this.props;
        const { question, answer, _id, endpoint } = this.props;
        return (
            <form className="editForm" /*handleChange={(e) => handleChange}*/>
                <div className="edittTitleWrapper">
                    <input className="editDeckTitle" type="text" value={title} />
                    <button className="deleteButt">⌫</button>
                </div>
                <div className="editQuestionWrapper">
                    <input className="editQuestion" type="text" value={question} />
                    <button className="deleteButt">⌫</button>
                </div>
                <div className="editAnswerWrapper">
                    <input className="editAnswer" type="text" value={answer} />
                    <button className="deleteButt">⌫</button>
                </div>
            </form>
        )
    }
}