import React, { Component } from "react";

import { connect } from "react-redux";

import { getDecks } from "../../redux/decks.js";

import HomeDeckItem from "./HomeDeckItem.js";

class Decks extends Component {
    componentDidMount() {
        this.props.getDecks();

    }
    render() {
        const { data, loading, errMsg } = this.props;
        const myDecks = data.map((deck, i) => <DeckItem key={deck + i} {...deck}></DeckItem>)
        console.log(data.title);
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
                <ul className={this.props.deckWrapperClass}>
                    {myDecks}
                </ul>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.decks
}

export default connect(mapStateToProps, { getDecks })(Decks);
