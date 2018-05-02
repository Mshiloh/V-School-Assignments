import React, { Component } from 'react'
import { connect } from "react-redux";
import { newCard } from "../../redux/cards.js";

class Card extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                // title: "",
                question: "",
                answer: ""
            }
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.titleAdded = this.titleAdded.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.newCard(this.state.inputs, this.props.deckId);
        this.setState(this.initialState);
    }

    titleAdded(event) {
        event.preventDefault();
        alert("New deck added.")
    }

    render() {
        const { question, answer } = this.state.inputs;
        return (
            <div className="newCardWrapper">

                <form onSubmit={this.handleSubmit} className="newCardForm">

                    <input onChange={this.handleChange} className="newQuestion" type="text" value={question} name="question" placeholder="Enter question..." />

                    <input onChange={this.handleChange} className="newAnswer" type="text" value={answer} name="answer" placeholder="Enter answer..." />

                    <button className="saveNewButt">Save</button>

                </form>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return state.card
}

export default connect(mapStateToProps, { newCard })(Card);