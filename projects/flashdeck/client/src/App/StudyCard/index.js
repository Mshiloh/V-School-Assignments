import React, { Component } from "react";

import { connect } from "react-redux";

import "./style.css";

import CardsItem from "./CardsItem";

import { getCards } from "../../redux/cards.js";


class StudyCard extends Component {
    componentDidMount() {
        this.props.getCards(this.props.match.params.deckId);
    }
    render() {

        const { data, loading, errMsg, currentIndex } = this.props;
        const myCards = data.map((card, i) => <CardsItem key={card + i} {...card}></CardsItem>)

        if (loading) {
            return (
                <div>...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            // const currentCard = data[currentIndex];
            // console.log(currentCard)
            return (
                <div>
                    {myCards[0]}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.cards
}

export default connect(mapStateToProps, { getCards })(StudyCard);