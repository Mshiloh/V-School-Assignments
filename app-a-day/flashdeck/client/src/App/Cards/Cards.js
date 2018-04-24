import React, { Component } from "react";

import { connect } from "react-redux";

import { getCards } from "../../redux/cards.js";

import CardsItem from "./CardsItem.js";

class Cards extends Component {
    componentDidMount() {
        this.props.getCards();

    }
    render() {
        const { data, loading, errMsg } = this.props;
        const myCards = <CardsItem{...data}></CardsItem>

        if (loading) {
            return (
                <div>...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            return (
                <div>
                    {myCards}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.cards
}

export default connect(mapStateToProps, { getCards })(Cards);