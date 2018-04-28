import React, { Component } from 'react'

export default class EditItem extends Component {
    render() {
        const { title } = this.props.deckId;
        const { question, answer, _id, endpoint } = this.props;
        return (
            <div>
                <input className="editDeckTitle" type="text" value={title}/>
                <br/>
                <input className="editQuestion" type="text" value={question}/>
                <br/>
                <input className="editAnswer" type="text" value={answer}/>
            </div>
        )
    }
}